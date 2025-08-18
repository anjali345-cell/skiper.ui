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
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 dark:bg-gray-800 bg-white text-black dark:text-white md:left-6"
    >
      <IceCreamCone className="fill-[#EEBDE0] stroke-1 text-neutral-800" />
      {children}
    </Badge>
  )
}

export default BadgeButton
