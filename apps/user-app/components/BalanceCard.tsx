import { Card } from "@repo/ui/card"

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number
  locked: number
}) => {
  return (
    <Card title={"Balance"}>
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3 transition-colors hover:bg-slate-50 px-2 rounded-md">
          <div className="text-slate-600 font-medium">Unlocked balance</div>
          <div className="font-semibold text-lg">
            {amount / 100} <span className="text-slate-500 text-sm">INR</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3 transition-colors hover:bg-slate-50 px-2 rounded-md">
          <div className="text-slate-600 font-medium">Total Locked Balance</div>
          <div className="font-semibold text-lg">
            {locked / 100} <span className="text-slate-500 text-sm">INR</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3 transition-colors hover:bg-slate-50 px-2 rounded-md">
          <div className="text-slate-600 font-medium">Total Balance</div>
          <div className="font-semibold text-lg text-[#6a51a6]">
            {(locked + amount) / 100} <span className="text-slate-500 text-sm">INR</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

