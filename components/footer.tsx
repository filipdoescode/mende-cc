import Image from "next/image"
import Link from "next/link"
import { commonContent } from "@/content/common"
import MendeCC from "@/public/images/mende-cc.png"

import { NAVIGATION } from "@/lib/navigation"

import { MMLink } from "./mm-link"

export function Footer() {
  return (
    <footer className="bg-black py-16 text-gray-ea">
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="font-artbrush text-[32px] font-medium text-secondary">
            <h3 className="">Think we&apos;d be a great fit?</h3>

            <MMLink text={commonContent.footer.letsConnect} href="/" />
          </div>

          <div className="flex justify-between">
            <Image src={MendeCC} alt="Mende's creative corner" />

            <div className="flex gap-2">
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

        <hr className="my-8" />

        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} | Mendflow Ltd.</div>

          <nav>
            <ul className="flex gap-6">
              {NAVIGATION.map((nav, index) => (
                <Link
                  href={nav.href}
                  key={nav.label + index}
                  className="transition-colors hover:text-secondary"
                >
                  {nav.label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
