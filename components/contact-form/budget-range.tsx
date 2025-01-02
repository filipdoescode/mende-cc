"use client"

import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { z } from "zod"

import { DualRangeSlider } from "../ui/range-slider"

export const budgetRangeSchema = z.object({
  budget: z.array(z.number()),
})

type BudgetRangeFormValues = z.infer<typeof budgetRangeSchema>

export function BudgetRangeStep() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext<BudgetRangeFormValues>()

  const [values, setValues] = useState([1000, 20000])

  const handleRangeChange = (newValues: number[]) => {
    setValues(newValues)
    setValue("budget", newValues)
  }

  useEffect(() => {
    setValue("budget", values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-4 text-start">
      <div className="space-y-2">
        <DualRangeSlider
          label={(value) => <span>${value}</span>}
          value={values}
          onValueChange={handleRangeChange}
          min={1000}
          max={20000}
          step={250}
        />
        {errors.budget && (
          <span className="text-xs text-destructive">
            {errors.budget.message}
          </span>
        )}
      </div>
    </div>
  )
}
