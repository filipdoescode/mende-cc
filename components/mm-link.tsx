import { HTMLAttributes, ReactNode } from "react"
import Link, { LinkProps } from "next/link"

import { THEME_COLORS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MMLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "tertiary"
  className?: HTMLAttributes<HTMLAnchorElement>["className"]
  arrowClassName?: HTMLAttributes<HTMLDialogElement>["className"]
  children: ReactNode
}

export function MMLink({
  children,
  className,
  variant = "primary",
  arrowClassName,
  ...props
}: MMLinkProps) {
  return (
    <Link
      className={cn(
        "group relative inline-flex flex-col lg:text-[32px]",
        `text-${variant}`,
        className
      )}
      {...props}
    >
      <div className={cn("flex gap-6 font-artbrush")}>
        {children}

        <div className={cn("flex items-center justify-center", arrowClassName)}>
          <Icons.brushArrow
            variant={THEME_COLORS[variant]}
            className="transition-transform group-hover:translate-x-2"
          />
        </div>
      </div>

      <div className="w-full">
        <Icons.brushUnderline variant={THEME_COLORS[variant]} />
      </div>
    </Link>
  )
}
