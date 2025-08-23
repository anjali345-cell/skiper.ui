import React, { ReactNode } from "react"
import { IceCreamCone } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface BadgeButtonProps {
  children: ReactNode
}

const BadgeButton = ({ children }: BadgeButtonProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 px-5 py-0 text-lg shadow-lg cursor-pointer rounded-[20px] border border-neutral-800/10 md:left-6"
    >
      <IceCreamCone className="fill-[#d2f583] flex stroke-1 text-neutral-800" />
      {children}
    </Badge>
  )
}

export default BadgeButton
