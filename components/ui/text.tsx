import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define the Text component's variants using cva
const textVariants = cva(
  "font-inter leading-relaxed text-[#4C495C] text-xs md:text-lg lg:text-2xl" // Base styles
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"

    return (
      <Comp className={cn(textVariants({ className }))} ref={ref} {...props} />
    )
  }
)

Text.displayName = "Text"

export { Text, textVariants }
