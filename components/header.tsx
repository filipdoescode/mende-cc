import { Icons } from "@/components/icons"
import { NavItems } from "@/components/nav-items"

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
    <header className="container flex justify-between py-14">
      <nav>
        <NavItems items={navItems_1} />
      </nav>

      <div className="translate-y-2">
        <Icons.logo />
      </div>

      <nav>
        <NavItems items={navItems_2} />
      </nav>
    </header>
  )
}
