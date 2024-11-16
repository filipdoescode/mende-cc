import { Icons } from "@/components/icons"
import { NavItems } from "@/components/nav-items"

import { HamburgerIcon } from "./hamburger-menu"

const navItems_1 = [
  {
    href: "/",
    label: "The Process",
  },
  {
    href: "/",
    label: "The Results",
  },
]
const navItems_2 = [
  {
    href: "/",
    label: "My Story",
  },
  {
    href: "/",
    label: "Let's Connect",
  },
]

export function Header() {
  return (
    <header className="container flex justify-between py-8 lg:py-14">
      <nav className="hidden lg:block">
        <NavItems items={navItems_1} />
      </nav>

      <div className="lg:translate-y-2">
        <Icons.logo className="max-lg:h-[30px] max-lg:w-14" />
      </div>

      <nav className="hidden lg:block">
        <NavItems items={navItems_2} />
      </nav>

      <HamburgerIcon />
    </header>
  )
}
