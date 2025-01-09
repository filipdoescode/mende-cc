import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface TextHighlightProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "tertiary"
}

export function TextHighlight({
  children,
  variant = "primary",
  className,
}: TextHighlightProps) {
  return (
    <span
      className={cn(`font-artbrush font-normal text-${variant}`, className)}
    >
      {children}
    </span>
  )
}
