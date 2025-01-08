import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Toaster } from "sonner"

import "@/styles/globals.css"

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

const artbrush = localFont({
  variable: "--font-artbrush",
  weight: "400",
  src: "./fonts/artbrush/artbrush.ttf",
})

const axiforma = localFont({
  variable: "--font-axiforma",
  weight: "600",
  src: "./fonts/axiforma/Axiforma-SemiBold.woff",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    template: "%s | Mende Creative Corner",
    default: "Mende Creative Corner",
  },
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
          "min-h-screen bg-background font-general-sans antialiased",
          generalSans.variable,
          artbrush.variable,
          axiforma.variable,
          inter.variable
        )}
      >
        {children}

        <Toaster
          toastOptions={{
            classNames: {
              success: "bg-green-500 text-white",
            },
          }}
        />
      </body>
    </html>
  )
}
