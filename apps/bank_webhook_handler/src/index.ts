import express from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handle form data

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.post("/hdfcWebhook", async (req, res) => {
    console.log("Webhook received:", req.body);

    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: { userId: Number(paymentInformation.userId) },
                data: { amount: { increment: Number(paymentInformation.amount) } }
            }),
            db.onRampTransaction.updateMany({
                where: { token: paymentInformation.token },
                data: { status: "Success" }
            })
        ]);

        console.log("Payment updated successfully.");
        res.json({ message: "Captured" });

    } catch (e) {
        console.error("Error processing webhook:", e);
        res.status(500).json({ message: "Error while processing webhook" });
    }
});

app.listen(3003, () => console.log("Server running on port 3003"));
