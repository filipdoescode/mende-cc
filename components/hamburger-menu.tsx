"use client"

import Link from "next/link"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import { NAVIGATION } from "@/lib/navigation"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Text } from "@/components/ui/text"
import { Icons } from "@/components/icons"

export function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.hamburger />
      </SheetTrigger>
      <SheetContent className="bg-[#231F20]">
        <VisuallyHidden asChild>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
        </VisuallyHidden>

        <div className="container absolute left-0 right-0 flex w-full justify-between py-2">
          <Icons.logoWhite />

          <SheetClose>
            <Icons.closeHamburger />
          </SheetClose>
        </div>

        <nav className="h-full w-full">
          <ul className="mx-auto flex h-full max-w-[214px] flex-col items-center justify-center">
            {NAVIGATION.map((item, index) => (
              <li
                key={item.label + index}
                className="group w-full border-b border-[#DADADA] py-7 text-center transition-colors hover:border-secondary"
              >
                <SheetTrigger asChild>
                  <Link href={item.href}>
                    <Text className="text-2xl text-[#EEEEEA] transition-colors group-hover:text-secondary">
                      {item.label}
                    </Text>
                  </Link>
                </SheetTrigger>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
