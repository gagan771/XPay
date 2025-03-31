"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { useRouter } from "next/navigation";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleTransfer = async () => {
        try {
            setError("");
            setIsLoading(true);
            
            if (!number || !amount) {
                setError("Please fill in all fields");
                return;
            }

            if (isNaN(Number(amount)) || Number(amount) <= 0) {
                setError("Please enter a valid amount");
                return;
            }

            const result = await p2pTransfer(number, Number(amount) * 100);
            
            if (result.message === "Transfer successful") {
                // Clear form
                setNumber("");
                setAmount("");
                // Refresh the page to update balances
                router.refresh();
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError("An error occurred during transfer");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return <div className="h-[90vh]">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput 
                        placeholder={"Number"} 
                        label="Number" 
                        value={number}
                        onChange={(value) => {
                            setNumber(value);
                            setError("");
                        }} 
                    />
                    <TextInput 
                        placeholder={"Amount"} 
                        label="Amount" 
                        value={amount}
                        onChange={(value) => {
                            setAmount(value);
                            setError("");
                        }} 
                    />
                    {error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )}
                    <div className="pt-4 flex justify-center">
                        <Button 
                            onClick={handleTransfer}
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send"}
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}