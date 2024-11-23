import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-serif font-medium leading-tight tracking-tight transition-all font-inter text-[#231F20] font-semibold",
  {
    variants: {
      as: {
        h1: "text-[30px] mg:text-5xl lg:text-[68px]",
        h2: "text-2xl lg:text-6xl",
        h3: "text-5xl",
        h4: "text-4xl",
        h5: "text-3xl",
        h6: "text-2xl",
      },
    },
    defaultVariants: {
      as: "h2",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = "h2", asChild = false, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : (as as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")

    return (
      <Comp
        className={cn(headingVariants({ as, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
