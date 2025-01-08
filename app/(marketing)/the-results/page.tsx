import { Metadata } from "next"
import Image from "next/image"

import { marqueeLogos } from "@/lib/logos"
import { ROUTES } from "@/lib/routes"
import { Heading } from "@/components/ui/heading"
import Marquee from "@/components/ui/marquee"
import { Text } from "@/components/ui/text"
import { MMLink } from "@/components/mm-link"
import { TextHighlight } from "@/components/text-highlight"

export const metadata: Metadata = {
  title: "The Results",
}

export default function TheProcessPage() {
  return (
    <div className="space-y-28">
      <section className="container space-y-[50px]">
        <div>
          <Heading
            as="h1"
            className="flex flex-col border-b border-[#959390] pb-10 pt-40 text-5xl leading-[1.1] lg:!text-[160px]"
          >
            The <br />
            <TextHighlight variant="secondary" className="max-lg:text-[50px]">
              Results
            </TextHighlight>
          </Heading>
        </div>

        <div className="space-y-10 pt-5">
          <div className="flex gap-[30px]">
            <div className="grow basis-full">
              <Image
                src="/images/the-results/1.webp"
                width={870}
                height={600}
                alt="Submit juice"
                className="w-full"
              />
            </div>

            <div className="mt-auto max-w-[270px] basis-full">
              <Image
                src="/images/the-results/2.webp"
                width={270}
                height={246}
                alt="Submit juice"
                className="h-[246px] w-[270px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="space-y-5">
              <Heading className="!text-[32px] font-semibold uppercase tracking-widest">
                Submit Juice
              </Heading>

              <div className="max-w-[1044px] space-y-10">
                <Text>
                  Submit Juice is here to empower startups and businesses by
                  simplifying their online presence expansion, saving them time
                  and effort through expert directory submissions and
                  SEO-boosting via backlink building.
                </Text>

                <div>
                  <MMLink
                    href={ROUTES.caseStudy.submitJuice}
                    variant="secondary"
                    className="!text-2xl"
                  >
                    View Case Study
                  </MMLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="mt-auto space-y-5">
            <Heading className="!text-[32px] font-semibold uppercase tracking-widest">
              MARASCO CHARITABLE FOUNDATION{" "}
            </Heading>

            <div className="max-w-[1044px] space-y-10">
              <Text>
                Led by two incredible humans, Tony and Lacce, Marasco Charitable
                Foundation is on a mission to make a real difference in the
                lives of children in need.
              </Text>

              <div>
                <MMLink
                  href={ROUTES.caseStudy.mcf}
                  variant="secondary"
                  className="!text-2xl"
                >
                  View Case Study
                </MMLink>
              </div>
            </div>
          </div>

          <div className="grow basis-full">
            <Image
              src="/images/the-results/3.webp"
              width={670}
              height={596}
              alt="Merasco charitable foundation"
              className="h-auto max-h-[596px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="grow basis-full">
            <Image
              src="/images/the-results/4.webp"
              width={1170}
              height={645}
              alt="Miratrix"
              className="h-auto max-h-[645] w-full object-cover"
            />
          </div>

          <div className="mt-auto space-y-5">
            <Heading className="!text-[32px] font-semibold uppercase tracking-widest">
              MIRATRIX{" "}
            </Heading>

            <div className="max-w-[865px] space-y-10">
              <Text>
                Expert Web3 guidance to take your business to the next level.
                Providing no-nonsense consultancy informed by hands-on knowledge
                of the crypto sector, with plus fifteen years of marketing
                experience.
              </Text>

              <div>
                <MMLink
                  href={ROUTES.caseStudy.miratrix}
                  variant="secondary"
                  className="!text-2xl"
                >
                  View Case Study
                </MMLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="additional-designs">
        <div className="container">
          <Heading>Additional Designs</Heading>
        </div>

        <div className="container space-y-24">
          <Image
            src="/images/the-results/additional/1.webp"
            width={900}
            height={635}
            alt="Miratrix"
            className="mx-auto"
          />

          <Image
            src="/images/the-results/additional/2.webp"
            width={1170}
            height={667}
            alt="Miratrix"
            className="w-full"
          />

          <Image
            src="/images/the-results/additional/3.webp"
            width={670}
            height={919}
            alt="Miratrix"
            className="mx-auto h-full"
          />

          <div className="relative flex justify-end">
            <Image
              src="/images/the-results/additional/4.webp"
              width={1105}
              height={734}
              alt="Miratrix"
              className="max-h-[734px] w-full max-w-[1105px]"
            />
            <Image
              src="/images/the-results/additional/5.webp"
              width={465}
              height={211}
              alt="Miratrix"
              className="absolute bottom-10 left-0"
            />
          </div>

          <Image
            src="/images/the-results/additional/6.webp"
            width={1100}
            height={696}
            alt="Miratrix"
            className="max-h-[696] w-full max-w-[1100px]"
          />

          <div className="flex gap-[70px]">
            <div className="w-full grow basis-full">
              <Image
                src="/images/the-results/additional/7.webp"
                width={905}
                height={466}
                alt="Miratrix"
              />
            </div>

            <div className="my-auto">
              <Image
                src="/images/the-results/additional/8.webp"
                width={487}
                height={366}
                alt="Miratrix"
                className="w-full"
              />
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/the-results/additional/9.webp"
              width={1170}
              height={779}
              alt="Miratrix"
              className="w-full"
            />

            <Image
              src="/images/the-results/additional/10.webp"
              width={427}
              height={306}
              alt="Miratrix"
              className="absolute -bottom-10 -right-10 translate-x-40 translate-y-20"
            />
          </div>

          <Image
            src="/images/the-results/additional/11.webp"
            width={998}
            height={687}
            alt="Miratrix"
            className="w-full pt-20"
          />

          <div className="">
            <div className="flex">
              <div className="flex min-h-[572px] items-end">
                <Image
                  src="/images/the-results/additional/13.webp"
                  width={700}
                  height={466}
                  alt="Miratrix"
                  className="max-h-[466px] w-auto"
                />
              </div>

              <div className="ml-auto">
                <Image
                  src="/images/the-results/additional/12.webp"
                  width={695}
                  height={412}
                  alt="Miratrix"
                  className="h-full max-h-[412px] w-full max-w-[695px]"
                />
              </div>
            </div>

            <div className="flex gap-[30px]">
              <Image
                src="/images/the-results/additional/14.webp"
                width={570}
                height={767}
                alt="Miratrix"
                className="w-full"
              />

              <Image
                src="/images/the-results/additional/15.webp"
                width={570}
                height={767}
                alt="Miratrix"
                className="w-full"
              />
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/the-results/additional/16.webp"
              width={870}
              height={534}
              alt="Miratrix"
              className="h-full w-full max-w-[870px]"
            />

            <Image
              src="/images/the-results/additional/17.webp"
              width={433}
              height={176}
              alt="Miratrix"
              className="absolute bottom-0 right-0"
            />
          </div>

          <Image
            src="/images/the-results/additional/18.webp"
            width={1171}
            height={771}
            alt="Miratrix"
            className="h-full max-h-[771px] w-full"
          />
        </div>
      </section>

      <section>
        <Marquee pauseOnHover>
          {marqueeLogos.map((logo, index) => (
            <Image key={index} src={logo.src} alt={logo.alt} />
          ))}
        </Marquee>
      </section>
    </div>
  )
}
