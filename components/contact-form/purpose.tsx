import { useFormContext } from "react-hook-form"
import { z } from "zod"

import { Textarea } from "@/components/ui/textarea"

export const purposeSchema = z.object({
  purpose: z.string().min(1, "Field is required"),
})

type PurposeFormValues = z.infer<typeof purposeSchema>

export function PurposeStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PurposeFormValues>()

  return (
    <div className="space-y-4 text-start">
      <div className="space-y-2">
        <label
          htmlFor={register("purpose").name}
          className="block text-xs font-medium text-primary"
        >
          Describe the project*
        </label>
        <Textarea
          id={register("purpose").name}
          {...register("purpose")}
          cols={100}
          rows={10}
          className="rounded-none border border-dashed border-primary !text-2xl ring-0 focus-visible:outline-none"
        />
        {errors.purpose && (
          <span className="text-xs text-destructive">
            {errors.purpose.message}
          </span>
        )}
      </div>
    </div>
  )
}
