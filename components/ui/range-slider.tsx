"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface DualRangeSliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: "top" | "bottom"
  label?: (value: number | undefined) => React.ReactNode
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(({ className, label, labelPosition = "top", ...props }, ref) => {
  const initialValue = Array.isArray(props.value)
    ? props.value
    : [props.min, props.max]

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-[49px] w-full grow overflow-hidden border border-[#959390] bg-white lg:h-[60px]">
        <SliderPrimitive.Range className="absolute h-full bg-secondary" />
      </SliderPrimitive.Track>

      {initialValue.map((value, index) => (
        <React.Fragment key={index}>
          <SliderPrimitive.Thumb className="relative block h-4 w-4 -translate-y-[28px] rounded-full bg-white shadow-thumb ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            {label && (
              <span
                className={cn(
                  "absolute flex justify-center rounded-[2.5px] bg-secondary p-[6px] text-xs font-semibold text-white",
                  labelPosition === "top" && "-left-5 -top-9",
                  labelPosition === "bottom" && "top-4"
                )}
              >
                {label(value)}
              </span>
            )}
          </SliderPrimitive.Thumb>
        </React.Fragment>
      ))}
    </SliderPrimitive.Root>
  )
})
DualRangeSlider.displayName = "DualRangeSlider"

export { DualRangeSlider }
