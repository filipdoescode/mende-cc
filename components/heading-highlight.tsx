import { cn } from "@/lib/utils"

interface HeadingHighlightProps {
  children: string
  className?: string
}

export function HeadingHighlight({
  children,
  className,
}: HeadingHighlightProps) {
  return (
    <span className={cn("font-artbrush font-normal text-secondary", className)}>
      {children}
    </span>
  )
}
