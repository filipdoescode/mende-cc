import Image from "next/image"
import { landingContent } from "@/content/landing"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { BoxReveal } from "@/components/box-reveal"
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
        <BoxReveal width="100%">
          <Heading as="h1" className="max-[970px] mx-auto p-2 text-center">
            Build a <HeadingHighlight>Brand Presence</HeadingHighlight>
            &nbsp;that
            <br />
            <HeadingHighlight>Represents You</HeadingHighlight> and{" "}
            <HeadingHighlight>Connects</HeadingHighlight> with <br /> your
            target audience
          </Heading>
        </BoxReveal>
      </section>

      <section>
        <div className="container border-b border-[#959390] pb-[25px]">
          <ul className="flex justify-between">
            {/* TODO: Inter font */}
            {traits.map((trait) => (
              <li key={trait}>
                <Text className="tracking-wide lg:text-xl">{trait}</Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="container grid grid-cols-1 gap-[30px] pt-32 lg:grid-cols-2">
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

            <div className="font-inter flex flex-col gap-8">
              <Text>{landingContent.about.description}</Text>
              <Text>{landingContent.about.description_2}</Text>

              <Text asChild className="font-artbrush">
                <i>{landingContent.about.quote}</i>
              </Text>
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
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          <div className="flex flex-col gap-10 text-[#231F20]">
            <Heading>{landingContent.essence.heading}</Heading>

            <Text className="font-artbrush lg:text-[32px]">
              {landingContent.essence.question}
            </Text>

            <div className="font-inter flex flex-col gap-8">
              <Text>{landingContent.essence.description}</Text>
              <Text>{landingContent.essence.description_2}</Text>
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
        <div className="font-inter grid grid-cols-1 gap-20 md:gap-0 lg:grid-cols-2">
          <div className="flex max-w-[470px] flex-col gap-10">
            <Heading>{landingContent.process.heading}</Heading>

            <Text>{landingContent.process.description}</Text>

            <MMLink
              text={landingContent.process.cta.text}
              href="/"
              className="text-2xl"
            />
          </div>

          <div>
            <ul className="flex flex-col gap-[30px] md:flex-row">
              {landingContent.process.list.map((item, index) => (
                <li key={item.heading + index} className="space-y-4">
                  <div className="flex flex-row gap-4 md:flex-col md:gap-0">
                    <div className="relative" aria-hidden>
                      <Icons.cricleListNumber />

                      <span className="absolute inset-0 left-4 z-10 flex items-center font-artbrush text-lg text-[#EEEEEA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="font-artbrush text-[32px] text-[#231F20]">
                      {item.heading}
                    </h4>
                  </div>

                  <Text className="lg:text-lg">{item.description}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#E4E4DF]">
        <div className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Heading>{landingContent.faq.heading}</Heading>

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
