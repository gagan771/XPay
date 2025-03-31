"use client"
import { usePathname, useRouter } from "next/navigation"
import type React from "react"

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <div
      className={`
                flex items-center rounded-md my-1 cursor-pointer p-2.5 pl-6 
                transition-all duration-200 
                ${
                  selected
                    ? "text-[#6a51a6] bg-[#6a51a6]/10 border-l-2 border-[#6a51a6]"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }
            `}
      onClick={() => {
        router.push(href)
      }}
    >
      <div className={`pr-3 ${selected ? "text-[#6a51a6]" : ""}`}>{icon}</div>
      <div className={`font-medium ${selected ? "text-[#6a51a6]" : ""}`}>{title}</div>
    </div>
  )
}

