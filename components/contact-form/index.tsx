"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { defineStepper } from "@stepperize/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Heading } from "@/components/ui/heading"
import {
  budgetRangeSchema,
  BudgetRangeStep,
} from "@/components/contact-form/budget-range"
import {
  clientInfoSchema,
  ClientInfoStep,
} from "@/components/contact-form/client-info"
import {
  makeItHappenSchema,
  MakeItHappenStep,
} from "@/components/contact-form/make-it-happen"
import { purposeSchema, PurposeStep } from "@/components/contact-form/purpose"
import { QuickRecapStep } from "@/components/contact-form/quick-recap"
import { Icons } from "@/components/icons"
import { TextHighlight } from "@/components/text-highlight"

const { useStepper, steps } = defineStepper(
  {
    id: "clientInfo",
    label: (
      <Heading
        as="h1"
        className="font-artbrush !text-[80px] font-normal tracking-wide"
      >
        It‘s going to be a{" "}
        <TextHighlight variant="secondary">fun</TextHighlight> <br /> and
        <TextHighlight variant="secondary"> fulfilling</TextHighlight> process
      </Heading>
    ),
    schema: clientInfoSchema,
  },
  {
    id: "purpose",
    label: (
      <Heading
        as="h1"
        className="font-artbrush !text-[80px] font-normal tracking-wide"
      >
        What inspired you to get in touch <br /> today?
      </Heading>
    ),
    schema: purposeSchema,
  },
  {
    id: "budget",
    label: (
      <Heading
        as="h1"
        className="font-artbrush !text-[80px] font-normal tracking-wide"
      >
        What’s your budget range?
      </Heading>
    ),
    schema: budgetRangeSchema,
  },
  {
    id: "makeithappen",
    label: (
      <Heading
        as="h1"
        className="font-artbrush !text-[80px] font-normal tracking-wide"
      >
        Let’s make it happen
      </Heading>
    ),
    schema: makeItHappenSchema,
  },
  {
    id: "complete",
    label: (
      <Heading
        as="h1"
        className="font-artbrush !text-[80px] font-normal tracking-wide"
      >
        Quick Recap
      </Heading>
    ),
    schema: z.object({}),
  }
)

export function ContactForm() {
  const stepper = useStepper()

  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepper.current.schema),
  })

  const values = form.getValues()

  const onSubmit = (values: z.infer<typeof stepper.current.schema>) => {
    if (stepper.isLast) {
      console.log("[values]", values)
      stepper.reset()
      toast.success("Thank you for reaching out! I'll get back to you soon.")
      form.reset()
    } else {
      stepper.next()
    }
  }

  return (
    <div className="space-y-24">
      {stepper.current.label}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-[100px]">
            {stepper.switch({
              clientInfo: () => <ClientInfoStep />,
              purpose: () => <PurposeStep />,
              budget: () => <BudgetRangeStep />,
              makeithappen: () => <MakeItHappenStep />,
              complete: () => <QuickRecapStep values={values} />,
            })}

            <nav aria-label="Checkout Steps" className="group my-4 flex">
              {!stepper.isFirst && (
                <button
                  type="button"
                  className="group relative my-auto inline-flex flex-col font-artbrush text-2xl text-[#959390]"
                  onClick={stepper.prev}
                  disabled={stepper.isFirst}
                >
                  <div className={cn("flex gap-4 font-artbrush")}>
                    <div className="flex items-center justify-center">
                      <Icons.brushArrow
                        variant="#959390"
                        className="rotate-180 transition-transform group-hover:-translate-x-2"
                      />
                    </div>
                    Previous
                  </div>

                  <div className="w-full">
                    <Icons.brushUnderline variant="#959390" />
                  </div>
                </button>
              )}

              <ol className="flex grow basis-full items-center justify-center gap-2">
                {stepper.all.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <li className="flex flex-shrink-0 items-center gap-4">
                      <Button
                        type="button"
                        role="tab"
                        aria-current={
                          stepper.current.id === step.id ? "step" : undefined
                        }
                        aria-posinset={index + 1}
                        aria-setsize={steps.length}
                        aria-selected={stepper.current.id === step.id}
                        className={cn(
                          "flex size-[9px] cursor-auto items-center justify-center rounded-full bg-[#DADADA] p-0 hover:bg-[#DADADA]",
                          {
                            ["bg-secondary hover:bg-secondary/95"]:
                              stepper.current.id === step.id,
                          }
                        )}
                      >
                        <span className="sr-only">{index + 1}</span>
                      </Button>
                    </li>
                  </React.Fragment>
                ))}
              </ol>

              <div>
                {stepper.isLast ? (
                  <Button
                    variant="secondary"
                    className="h-full rounded-none px-12 py-6 text-4xl uppercase text-white"
                  >
                    Submit
                  </Button>
                ) : (
                  <button
                    type="submit"
                    className="group relative inline-flex cursor-pointer flex-col font-artbrush text-2xl text-[#57967B]"
                  >
                    <div className={cn("flex gap-4 font-artbrush")}>
                      Previous
                      <div className="flex items-center justify-center">
                        <Icons.brushArrow
                          variant="#57967B"
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <Icons.brushUnderline variant="#57967B" />
                    </div>
                  </button>
                )}
              </div>
            </nav>
          </div>
        </form>
      </Form>
    </div>
  )
}