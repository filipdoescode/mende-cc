import React from "react"

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
  background: Color
  foreground: Color
}

export function PalettePreview({
  logo,
  primary,
  secondary,
  background,
  foreground,
}: PalettePreviewProps) {
  return (
    <div className="grid min-h-[500px] grid-cols-3 grid-rows-2">
      <div
        className="row-span-2 flex h-full w-full flex-col justify-between px-[14px] pb-[14px] pt-[30px]"
        style={{ backgroundColor: primary.hex }}
      >
        <div className="h-full">{logo}</div>
        <div className="flex h-full flex-col justify-between">
          <Text className="font-artbrush text-sm text-[#DADADA]">MCF Blue</Text>

          <div className="font-inter text-[8px] text-[#DADADA]">
            <p>CMYK: {primary.cmyk}</p>
            <p>RGB: {primary.rgb}</p>
            <p>Hex: {primary.hex}</p>
          </div>
        </div>
      </div>

      <div
        className="col-span-2 h-full w-full px-[14px] pb-[14px] pt-[30px]"
        style={{ backgroundColor: secondary.hex }}
      >
        <div className="flex h-full flex-col justify-between">
          <Text className="font-artbrush text-sm text-primary">
            {secondary.name}
          </Text>

          <div className="font-inter text-[8px] text-primary">
            <p>CMYK: {secondary.cmyk}</p>
            <p>RGB: {secondary.rgb}</p>
            <p>Hex: {secondary.hex}</p>
          </div>
        </div>
      </div>

      <div
        className="h-full w-full px-[14px] pb-[14px] pt-[30px]"
        style={{ backgroundColor: background.hex }}
      >
        <div className="flex h-full flex-col justify-between">
          <Text className="font-artbrush text-sm text-[#DADADA]">
            {background.name}
          </Text>

          <div className="font-inter text-[8px] text-[#DADADA]">
            <p>CMYK: {background.cmyk}</p>
            <p>RGB: {background.rgb}</p>
            <p>Hex: {background.hex}</p>
          </div>
        </div>
      </div>
      <div
        className="h-full w-full px-[14px] pb-[14px] pt-[30px]"
        style={{ backgroundColor: foreground.hex }}
      >
        <div className="flex h-full flex-col justify-between">
          <Text className="font-artbrush text-sm text-primary">
            {foreground.name}
          </Text>

          <div className="font-inter text-[8px] text-primary">
            <p>CMYK: {foreground.cmyk}</p>
            <p>RGB: {foreground.rgb}</p>
            <p>Hex: {foreground.hex}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
