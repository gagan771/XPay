"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Select } from "@repo/ui/Select"
import { useState } from "react"
import { TextInput } from "@repo/ui/TextInput"
import { createOnRampTransaction } from "../app/lib/actions/createOnrampTransaction"

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
]

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "")
  const [value, setValue] = useState(0)

  return (
    <Card title="Add Money" className="shadow-md">
      <div className="w-full space-y-5">
        <div className="space-y-1">
          <TextInput
            label={"Amount (INR)"}
            placeholder={"Enter amount to add"}
            onChange={(val) => {
              setValue(Number(val))
            }}
          />
        </div>

        <div className="space-y-2">
          <div className="text-left text-slate-600 font-medium">Select Bank</div>
          <Select
            onSelect={(value) => {
              setRedirectUrl(SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || "")
              setProvider(SUPPORTED_BANKS.find((x) => x.name === value)?.name || "")
            }}
            options={SUPPORTED_BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              await createOnRampTransaction(provider, value)
              window.location.href = redirectUrl || ""
            }}
            className="w-full py-2 transition-all duration-200 bg-[#6a51a6] hover:bg-[#5a4590]"
          >
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Money
            </span>
          </Button>
        </div>
      </div>
    </Card>
  )
}

