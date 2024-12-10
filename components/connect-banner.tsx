import Link from "next/link"
import { commonContent } from "@/content/common"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function ConnectBanner() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 max-lg:max-w-[327px] lg:gap-12">
      <h2 className="max-w-[733px] text-center font-artbrush text-2xl lg:text-6xl">
        {commonContent.banner.heading}
      </h2>

      <Link
        href="/"
        className={cn(
          buttonVariants(),
          "rounded-none bg-secondary px-20 py-8 font-artbrush text-2xl uppercase text-[#F9FAFB] hover:bg-secondary/90"
        )}
      >
        {commonContent.banner.cta.text}
      </Link>
    </div>
  )
}
