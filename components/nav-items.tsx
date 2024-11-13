import Link from "next/link"

interface NavItemProps {
  items: { href: string; label: string }[]
}

export function NavItems({ items }: NavItemProps) {
  return (
    <ul className="flex gap-[60px]">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="text-2xl">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
