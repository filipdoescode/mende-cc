import { cn } from "@/lib/utils"

interface TextHighlightProps {
  children: string
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
