import type { Metadata } from "next"
import localFont from "next/font/local"

import "@/app/globals.css"

import { cn } from "@/lib/utils"

const generalSans = localFont({
  variable: "--font-general-sans",
  weight: "300 400 500 600 700",
  src: [
    {
      path: "./fonts/general-sans/GeneralSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
})

export const metadata: Metadata = {
  title: "Mende Creative Corner",
  description: "The corner of creativity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-general-sans min-h-screen bg-background antialiased",
          generalSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
