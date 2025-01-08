import { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact me",
}

export default function ContactPage() {
  return (
    <div className="py-40">
      <section className="container">
        <ContactForm />
      </section>
    </div>
  )
}
