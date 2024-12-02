import Link from "next/link"
import { commonContent } from "@/content/common"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function ConnectBanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:gap-12">
      <h2 className="max-w-[733px] text-center font-artbrush text-2xl lg:text-6xl">
        {commonContent.banner.heading}
      </h2>

      <Link
        href="/"
        className={cn(
          buttonVariants(),
          "rounded-none bg-secondary px-20 py-8 font-artbrush text-2xl uppercase text-[#F9FAFB]"
        )}
      >
        {commonContent.banner.cta.text}
      </Link>
    </div>
  )
}
