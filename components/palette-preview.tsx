import React from "react"

import { cn } from "@/lib/utils"

import { Text } from "./ui/text"

type Color = {
  name: string
  cmyk: string
  rgb: string
  hex: string
}

interface PalettePreviewProps {
  logo: React.ReactNode
  primary: Color
  secondary: Color
  tertiary: Color
  background: Color
  foreground: Color
}

export function PalettePreview({
  logo,
  primary,
  secondary,
  tertiary,
  background,
  foreground,
}: PalettePreviewProps) {
  return (
    <div className="grid min-h-[400px] grid-cols-3 grid-rows-2">
      <div
        className="row-span-2 flex h-full w-full flex-col justify-between p-[14px]"
        style={{ backgroundColor: primary.hex }}
      >
        <div className="h-full">Logo</div>
        <div className="flex h-full flex-col justify-between">
          <Text className="font-artbrush text-sm text-[#DADADA]">MCF Blue</Text>

          <div className="font-inter text-[8px] text-[#DADADA]">
            <p>CMYK: {primary.cmyk}</p>
            <p>RGB: {primary.rgb}</p>
            <p>Hex: {primary.hex}</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 h-full w-full bg-[#F4A382]">A</div>
      <div className="h-full w-full bg-[#1A1A1A]">A</div>
      <div className="h-full w-full bg-[#F5F5F0]">A</div>
    </div>
  )
}
