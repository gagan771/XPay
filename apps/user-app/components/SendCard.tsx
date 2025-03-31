"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTransfer"
import { useRouter } from "next/navigation"

export function SendCard() {
  const [number, setNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleTransfer = async () => {
    try {
      setError("")
      setIsLoading(true)

      if (!number || !amount) {
        setError("Please fill in all fields")
        return
      }

      if (isNaN(Number(amount)) || Number(amount) <= 0) {
        setError("Please enter a valid amount")
        return
      }

      const result = await p2pTransfer(number, Number(amount) * 100)

      if (result.message === "Transfer successful") {
        // Clear form
        setNumber("")
        setAmount("")
        // Refresh the page to update balances
        router.refresh()
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error("Transfer error:", err)
      setError("An error occurred during transfer")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-[90vh] bg-gradient-to-b from-slate-50 to-white">
      <Center>
        <Card title="Send Money" className="shadow-lg">
          <div className="min-w-72 pt-4 space-y-5">
            <TextInput
              placeholder={"Enter recipient number"}
              label="Recipient Number"
              value={number}
              onChange={(value) => {
                setNumber(value)
                setError("")
              }}
            />
            <TextInput
              placeholder={"Enter amount to send"}
              label="Amount (INR)"
              value={amount}
              onChange={(value) => {
                setAmount(value)
                setError("")
              }}
            />
            {error && (
              <div className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded-md border border-red-100 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {error}
              </div>
            )}
            <div className="pt-4 flex justify-center">
              <Button
                onClick={handleTransfer}
                disabled={isLoading}
                className="w-full py-2 transition-all duration-200 bg-[#6a51a6] hover:bg-[#5a4590] disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Money"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  )
}

