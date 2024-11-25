"use client"

import { useState } from "react"
import { landingContent } from "@/content/landing"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icons } from "@/components/icons"

export function FaqAccordion() {
  const [value, setValue] = useState("")

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(v) => setValue(v)}
    >
      {landingContent.faq.items.map((item, index) => (
        <AccordionItem key={item.heading + index} value={item.heading}>
          <AccordionTrigger
            className={cn(
              "py-5 text-left font-artbrush text-base text-[#231F20] lg:border-none lg:text-[32px]",
              {
                "border-b border-[#231F20]": value && item.heading !== value,
              }
            )}
          >
            <span className="max-w-[500px]">{item.heading}</span>

            {value && item.heading === value ? <Icons.minus /> : <Icons.plus />}
          </AccordionTrigger>
          <AccordionContent className="font-inter text-xs text-[#4C495C] lg:text-2xl">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
