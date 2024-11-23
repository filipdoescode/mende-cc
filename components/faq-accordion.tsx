"use client"

import { useState } from "react"
import { landingContent } from "@/content/landing"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Icons } from "./icons"

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
          <AccordionTrigger className="text-left font-artbrush text-[32px] text-[#231F20]">
            <span className="max-w-[500px]">{item.heading}</span>

            {value && item.heading === value ? <Icons.minus /> : <Icons.plus />}
          </AccordionTrigger>
          <AccordionContent className="font-inter text-2xl text-[#4C495C]">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
