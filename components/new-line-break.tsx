import { cn } from "@/lib/utils"

export function NewLineBreak({
  className,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span aria-hidden className={cn("block pb-6", className)} />
}
