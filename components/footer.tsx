import Link from "next/link"
import { commonContent } from "@/content/common"

import { NAVIGATION } from "@/lib/navigation"
import { Icons } from "@/components/icons"
import { MMLink } from "@/components/mm-link"

// TODO: Correct links & navigation

export function Footer() {
  return (
    <footer className="bg-black pb-8 pt-12 text-gray-ea lg:py-16">
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="hidden font-artbrush text-[32px] font-medium text-[#EEEEEA] lg:block">
            <h3 className="">Think we&apos;d be a great fit?</h3>

            <MMLink href="/" variant="tertiary" className="text-[#FFDD93]">
              {commonContent.footer.letsConnect}
            </MMLink>
          </div>

          <div className="hidden justify-between lg:flex">
            <Icons.logoWhite />

            <div className="flex flex-row gap-2">
              <Link
                href="mailto:contact@mendflow.com"
                className="transition-colors hover:text-secondary"
              >
                contact@mendflow.com
              </Link>

              <span>•</span>

              <Link
                href="mailto:contact@mendflow.com"
                className="transition-colors hover:text-secondary"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 hidden lg:block" />

        <div className="flex justify-between">
          <div className="flex flex-col justify-between py-[10px] lg:block lg:py-0">
            <p className="hidden lg:block">
              © {new Date().getFullYear()} | Mendflow Ltd.
            </p>

            <ul className="flex gap-4 lg:hidden">
              <li>
                <Link href="mailto:contact@mendflow.com">
                  <Icons.email />
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@mendflow.com">
                  <Icons.linkedin />
                </Link>
              </li>
            </ul>

            <Icons.logoWhite className="block lg:hidden" />
          </div>

          <nav>
            <ul className="flex flex-col gap-6 lg:flex-row">
              {NAVIGATION.map((nav, index) => (
                <Link
                  href={nav.href}
                  key={nav.label + index}
                  className="border-[#DADADA] py-[10px] text-right transition-colors hover:text-secondary lg:border-none lg:py-0 lg:text-left [&:not(:last-child)]:border-b"
                >
                  {nav.label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="mt-[5px] lg:hidden" />

        <p className="block pt-4 text-center lg:hidden">
          © {new Date().getFullYear()} | Mendflow Ltd.
        </p>
      </div>
    </footer>
  )
}
