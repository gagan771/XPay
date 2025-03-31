"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
    const session = await getServerSession(authOptions);
    const from = session?.user?.id;
    if (!from) {
        return { message: "Error while sending" }
    }

    const toUser = await prisma.user.findFirst({
        where: { number: to }
    });

    if (!toUser) {
        return { message: "User not found" }
    }

    try {
        await prisma.$transaction(async (tx) => {
            // Lock the row
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

            // Get or create sender's balance
            let fromBalance = await tx.balance.findUnique({
                where: { userId: Number(from) }
            });

            if (!fromBalance) {
                fromBalance = await tx.balance.create({
                    data: { 
                        userId: Number(from), 
                        amount: 0,
                        locked: 0 
                    }
                });
            }

            // Check sufficient funds
            if (fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
            }

            // Get or create recipient's balance
            let toBalance = await tx.balance.findUnique({
                where: { userId: toUser.id }
            });

            if (!toBalance) {
                await tx.balance.create({
                    data: { 
                        userId: toUser.id, 
                        amount: 0,
                        locked: 0 
                    }
                });
            }

            // Perform transfer
            await tx.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } }
            });

            await tx.balance.update({
                where: { userId: toUser.id },
                data: { amount: { increment: amount } }
            });

            await tx.p2pTransfer.create({
                data: {
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    amount,
                    timestamp: new Date()
                }
            });
        });

        return { message: "Transfer successful" };
    } catch (error) {
        console.error("Transfer error:", error);
        return { message: error.message || "Error while sending" };
    }
}