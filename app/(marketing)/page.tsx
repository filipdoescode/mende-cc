import Image from "next/image"
import { landingContent } from "@/content/landing"

import { ConnectBanner } from "@/components/connect-banner"
import { FaqAccordion } from "@/components/faq-accordion"
import { HeadingHighlight } from "@/components/heading-highlight"
import { Icons } from "@/components/icons"
import { MMLink } from "@/components/mm-link"

const traits = ["Visual Identity Designer", "Human Being", "All-round creative"]

export default function Home() {
  return (
    <div className="space-y-40">
      <section className="container py-64">
        <h1 className="max-[970px] mx-auto text-center text-6xl">
          Build a <HeadingHighlight>Brand Presence</HeadingHighlight>&nbsp;that
          <br />
          <HeadingHighlight>Represents You</HeadingHighlight> and{" "}
          <HeadingHighlight>Connects</HeadingHighlight> with <br /> your target
          audience
        </h1>
      </section>

      <section>
        <div className="container border-b border-[#959390] pb-[25px]">
          <ul className="flex justify-between">
            {/* TODO: Inter font */}
            {traits.map((trait) => (
              <li
                key={trait}
                className="font-inter text-xl tracking-wide text-[#4C495C]"
              >
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="container grid grid-cols-2 gap-[30px] pt-32">
          <div>
            <Image
              src="/images/landing/1.webp"
              width={570}
              height={984}
              alt="Mende Mitreski"
              className="h-[984px] w-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-10">
            <h2 className="font-inter text-[20px] font-semibold uppercase tracking-widest">
              {landingContent.about.heading}
            </h2>

            <div className="font-inter flex flex-col gap-8 text-2xl text-[#4C495C]">
              <p>{landingContent.about.description}</p>
              <p>{landingContent.about.description_2}</p>
              <i className="font-artbrush">{landingContent.about.quote}</i>
            </div>

            <div className="mt-auto">
              <MMLink
                text={landingContent.about.cta.text}
                href="/"
                className="text-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-10 text-[#231F20]">
            <h3 className="font-inter text-6xl font-semibold">
              {landingContent.essence.heading}
            </h3>

            <p className="font-artbrush text-[32px]">
              {landingContent.essence.question}
            </p>

            <div className="font-inter flex flex-col gap-8 text-2xl text-[#4C495C]">
              <p>{landingContent.essence.description}</p>
              <p>{landingContent.essence.description_2}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end gap-14">
            <Icons.circleBrush />

            <div className="pb-2">
              <MMLink
                href="/"
                text={landingContent.essence.cta.text}
                className="text-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="font-inter grid grid-cols-2">
          <div className="flex max-w-[470px] flex-col gap-10">
            <h3 className="text-6xl font-semibold">
              {landingContent.process.heading}
            </h3>
            <p className="text-2xl">{landingContent.process.description}</p>

            <MMLink
              text={landingContent.process.cta.text}
              href="/"
              className="text-2xl"
            />
          </div>

          <div>
            <ul className="flex gap-[30px]">
              {landingContent.process.list.map((item, index) => (
                <li key={item.heading + index}>
                  <div className="relative inline-block" aria-hidden>
                    <Icons.cricleListNumber />
                    <span className="absolute inset-0 z-10 flex items-center justify-center font-artbrush text-lg text-[#EEEEEA]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="font-artbrush text-[32px] text-[#231F20]">
                    {item.heading}
                  </h4>
                  <p className="text-lg text-[#4C495C]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#E4E4DF]">
        <div className="container py-24">
          <div className="grid grid-cols-2">
            <h3 className="text-6xl font-semibold text-[#231F20]">
              {landingContent.faq.heading}
            </h3>

            <div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-40">
        <ConnectBanner />
      </section>
    </div>
  )
}
