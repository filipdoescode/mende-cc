import { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { QuickQuestion } from "@/components/quick-question"

export const metadata: Metadata = {
  title: "Contact me",
}

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-40">
      <section className="container">
        <ContactForm />
      </section>

      <section className="container pb-40 pt-24">
        <QuickQuestion />
      </section>
    </div>
  )
}
