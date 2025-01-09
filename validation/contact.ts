import { z } from "zod"

export const clientInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  company: z.string(),
  phone: z.string(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, "Email address is required"),
})

export const budgetRangeSchema = z.object({
  budget: z.array(z.number()),
})

export const purposeSchema = z.object({
  purpose: z.string().min(1, "Field is required"),
})

export const makeItHappenSchema = z.object({
  timeframe: z.string().min(1, "Time frameis required"),
  howDidYouFindMe: z.string(),
})

export type ClientInfoFormValues = z.infer<typeof clientInfoSchema>
export type PurposeFormValues = z.infer<typeof purposeSchema>
export type BudgetRangeFormValues = z.infer<typeof budgetRangeSchema>
export type MakeItHappenFormValues = z.infer<typeof makeItHappenSchema>

export type ContactFormValues = ClientInfoFormValues &
  PurposeFormValues &
  BudgetRangeFormValues &
  MakeItHappenFormValues
