import Link from "next/link"

import { NAV_ITEMS_1, NAV_ITEMS_2 } from "@/lib/navigation"
import { ROUTES } from "@/lib/routes"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { Icons } from "@/components/icons"
import { NavItems } from "@/components/nav-items"

export function Header() {
  return (
    <header className="container flex justify-between py-8 lg:py-14">
      <nav className="hidden lg:block">
        <NavItems items={NAV_ITEMS_1} />
      </nav>

      <div className="lg:translate-y-2">
        <Link href={ROUTES.home}>
          <Icons.logo className="h-full w-full max-lg:h-[19px] max-lg:w-[88px]" />
        </Link>
      </div>

      <nav className="hidden lg:block">
        <NavItems items={NAV_ITEMS_2} />
      </nav>

      <div className="relative block lg:hidden">
        <HamburgerMenu />
      </div>
    </header>
  )
}
