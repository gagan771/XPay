"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
    try {
        const session = await getServerSession(authOptions);
        const from = session?.user?.id;
        if (!from) {
            return { message: "Please sign in to send money" }
        }

        const toUser = await prisma.user.findFirst({
            where: { number: to }
        });

        if (!toUser) {
            return { message: "User not found" }
        }

        if (toUser.id === Number(from)) {
            return { message: "Cannot send money to yourself" }
        }

        // First, get the sender's balance
        const fromBalance = await prisma.balance.findUnique({
            where: { userId: Number(from) }
        });

        if (!fromBalance) {
            return { message: "Sender's balance not found" }
        }

        // Check sufficient funds
        if (fromBalance.amount < amount) {
            return { message: "Insufficient funds" }
        }

        // Get or create recipient's balance
        const toBalance = await prisma.balance.findUnique({
            where: { userId: toUser.id }
        });

        if (!toBalance) {
            await prisma.balance.create({
                data: { 
                    userId: toUser.id, 
                    amount: 0,
                    locked: 0 
                }
            });
        }

        // Perform the transfer in a transaction
        await prisma.$transaction([
            prisma.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } }
            }),
            prisma.balance.update({
                where: { userId: toUser.id },
                data: { amount: { increment: amount } }
            }),
            prisma.p2pTransfer.create({
                data: {
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    amount,
                    timestamp: new Date()
                }
            })
        ]);

        return { message: "Transfer successful" };
    } catch (error) {
        console.error("Transfer error:", error);
        return { message: "Error while sending money. Please try again." };
    }
}