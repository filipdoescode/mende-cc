import { ReactNode } from "react"
import Link, { LinkProps } from "next/link"

import { THEME_COLORS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MMLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "tertiary"
  children: ReactNode
  className?: string
}

export function MMLink({
  children,
  className,
  variant = "primary",
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
      <div className="flex gap-6 font-artbrush">
        {children}

        <div className="flex items-center justify-center">
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
