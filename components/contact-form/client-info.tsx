import { ClientInfoFormValues } from "@/validation/contact"
import { useFormContext } from "react-hook-form"

import { Input } from "@/components/ui/input"

export function ClientInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ClientInfoFormValues>()

  return (
    <div className="space-y-10 text-start lg:space-y-[60px]">
      <div className="space-y-2">
        <label
          htmlFor={register("fullName").name}
          className="block text-xs font-medium text-primary"
        >
          Full Name*
        </label>
        <Input
          id={register("fullName").name}
          placeholder="e.g. Ethan Lee"
          variant="underline"
          className="pb-5 !text-2xl"
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className="text-xs text-destructive">
            {errors.fullName.message}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor={register("company").name}
          className="block text-xs font-medium text-primary"
        >
          Company/Organisation Name
        </label>
        <Input
          id={register("company").name}
          placeholder="e.g. ABC Corp (Optional)"
          variant="underline"
          className="pb-5 !text-2xl"
          required={register("company").required}
          {...register("company")}
        />
        {errors.company && (
          <span className="text-xs text-destructive">
            {errors.company.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[30px]">
        <div className="space-y-2">
          <label
            htmlFor={register("phone").name}
            className="block text-xs font-medium text-primary"
          >
            Phone Number
          </label>
          <Input
            id={register("phone").name}
            placeholder="e.g. +123456789 (Optional)"
            variant="underline"
            className="pb-5 !text-2xl"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-xs text-destructive">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor={register("email").name}
            className="block text-xs font-medium text-primary"
          >
            Email Address*
          </label>
          <Input
            id={register("email").name}
            placeholder="e.g. ethan.lee@gmail.com"
            variant="underline"
            className="pb-5 !text-2xl"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-destructive">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
