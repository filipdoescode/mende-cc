"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

import { ROUTES } from "@/lib/routes"
import { cn } from "@/lib/utils"

interface ThemedHeaderProps {
  children: ReactNode
}

function getThemeColor(
  currentRoute: string,
  routeObject: {
    [key: string]: {
      path: string
      theme: string
    }
  }
): string | null {
  for (const key in routeObject) {
    if (routeObject[key].path === currentRoute) {
      return routeObject[key].theme
    }
  }
  return "transparent" // Return null if no match is found
}

export function ThemedHeader({ children }: ThemedHeaderProps) {
  const pathname = usePathname()

  const theme = getThemeColor(pathname, ROUTES.caseStudy)
  return (
    <header className={cn(`bg-[${theme}] transition-colors`)}>
      {children}
    </header>
  )
}
