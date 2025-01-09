"use server"

import { contactUsTemplate } from "@/template/contact-us"
import { ContactFormValues } from "@/validation/contact"

import { transporter } from "@/lib/transporter"

export const contactAction = async (formData: ContactFormValues) => {
  await transporter.sendMail({
    from: `Mendflow bot"<${formData.email}>"`,
    to: process.env.SMTP_SERVER_USERNAME,
    subject: "New prospect from Mendflow",
    html: contactUsTemplate(formData),
  })

  return {
    status: "success",
  }
}
