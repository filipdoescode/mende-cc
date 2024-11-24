import Image from "next/image"
import Link, { LinkProps } from "next/link"
import ArrowRight from "@/public/arrow-right.svg"
import BrushUnderline from "@/public/brush-underline-button.svg"

import { cn } from "@/lib/utils"

interface MMLinkProps extends LinkProps {
  text: string
  className?: string
}

export function MMLink({ text, className, ...props }: MMLinkProps) {
  return (
    <Link
      className={cn(
        "group relative inline-flex flex-col text-secondary lg:text-[32px]",
        className
      )}
      {...props}
    >
      <div className="flex gap-6">
        {text}

        <Image
          src={ArrowRight}
          alt="Arrow right"
          className="transition-transform group-hover:translate-x-2"
        />
      </div>

      <Image
        src={BrushUnderline}
        alt="underline"
        aria-hidden
        className="w-full"
      />
    </Link>
  )
}
