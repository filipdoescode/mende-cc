import { MakeItHappenFormValues } from "@/validation/contact"
import { useFormContext } from "react-hook-form"

import { Input } from "@/components/ui/input"

export function MakeItHappenStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<MakeItHappenFormValues>()

  return (
    <div className="space-y-[60px] text-start">
      <div className="space-y-6">
        <label
          htmlFor={register("timeframe").name}
          className="block text-xs font-medium text-primary"
        >
          What’s your timeframe*
        </label>
        <Input
          id={register("timeframe").name}
          placeholder="e.g. 1-3 Months"
          variant="underline"
          className="pb-5 !text-2xl"
          required
          {...register("timeframe")}
        />
        {errors.timeframe && (
          <span className="text-xs text-destructive">
            {errors.timeframe.message}
          </span>
        )}
      </div>
      <div className="space-y-6">
        <label
          htmlFor={register("howDidYouFindMe").name}
          className="block text-xs font-medium text-primary"
        >
          How did you hear about me/my work?
        </label>
        <Input
          id={register("howDidYouFindMe").name}
          placeholder="e.g. LinkedIn"
          variant="underline"
          className="pb-5 !text-2xl"
          {...register("howDidYouFindMe")}
        />
        {errors.howDidYouFindMe && (
          <span className="text-xs text-destructive">
            {errors.howDidYouFindMe.message}
          </span>
        )}
      </div>
    </div>
  )
}
