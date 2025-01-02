import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { Icons } from "@/components/icons"
import { PalettePreview } from "@/components/palette-preview"
import { TextHighlight } from "@/components/text-highlight"

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#F4A382] pb-16 pt-40">
        <div className="text-center">
          <Heading
            as="h1"
            className="font-artbrush !text-[78px] font-normal tracking-wide"
          >
            Marasco Charitable Foundation
          </Heading>
          <Heading
            as="h2"
            className="font-artbrush !text-4xl font-normal tracking-wide"
          >
            Logo Design
          </Heading>
        </div>

        <div className="flex justify-center pt-24">
          <Icons.mcfLogo />
        </div>
      </section>

      <section className="container">
        <div className="-my-52 pb-52">
          <Image
            src="/images/mcf/hero.webp"
            width={1283}
            height={785}
            alt="hero"
            className="mx-auto"
          />
        </div>

        <div>
          <Heading
            as="h2"
            className="py-[90px] text-center font-artbrush !text-[32px] font-normal"
          >
            overview
          </Heading>

          <div className="space-y-24">
            <Text className="!text-[32px]">
              Led by two super cool humans, Tony and Lacce, Marasco Charitable
              Foundation <br /> is on a simple, yet{" "}
              <TextHighlight className="text-[34px]">
                really important mission
              </TextHighlight>{" "}
              to make a real{" "}
              <TextHighlight className="text-[34px]">difference</TextHighlight>{" "}
              in the lives of{" "}
              <TextHighlight className="text-[34px]">
                children in need.
              </TextHighlight>
            </Text>

            <div className="flex gap-32">
              <Text>
                When they reached out to me, they had a clear objective, a logo
                that didn’t just look nice but truly{" "}
                <TextHighlight>captured the heart of their work.</TextHighlight>{" "}
                It had to feel{" "}
                <TextHighlight>meaningful, represent the essence</TextHighlight>{" "}
                of their foundation, and support their{" "}
                <TextHighlight>vision for growth.</TextHighlight>
              </Text>

              <Text className="w-full max-w-[360px]">
                <span className="block font-bold">Core Service/s</span>
                Custom Logo Design Associated Type & Colors
              </Text>
            </div>

            <div className="flex justify-center">
              <Icons.mcfLogoFull />
            </div>

            <div className="space-y-10">
              <Heading
                as="h2"
                className="font-artbrush !text-[32px] font-normal"
              >
                The Concept
              </Heading>

              <div className="grid grid-cols-2 gap-8">
                <Text>
                  Our goal was to create something minimalist, yet powerful. So,
                  we worked on incorporating the initials in a way that felt
                  simplistic and memorable.
                </Text>
                <Text>
                  If you look closely, the design also forms a subtle heart
                  shape—bringing an extra layer of meaning that really aligns
                  with the MCF mission of love and care.
                </Text>

                <Text>
                  The icon tells the story visually—it features a child with
                  open arms, symbolizing warmth and connection, ready to embrace
                  the adult figure. The circular shape represents the child’s
                  head, and the rounded rectangle forms their raised arm.
                </Text>

                <Text>
                  In the end, the design didn’t just check all the boxes—it
                  resonated with Tony, Lacce, and their whole team. It’s a logo
                  that truly reflects the spirit of Marasco Charitable
                  Foundation and the important work they’re doing to help
                  children thrive.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24">
          <Image
            src="/images/mcf/01.webp"
            width={1167}
            height={615}
            alt="image"
            className="mx-auto w-full"
          />
        </div>
      </section>

      <section className="container">
        <Heading className="font-artbrush !text-[32px] font-normal">
          Type and colors
        </Heading>

        <div className="grid grid-cols-2">
          <PalettePreview
            primary={{
              name: "MCF Blue",
              cmyk: "94/78/49/53",
              rgb: "19/39/61",
              hex: "#11273d",
            }}
          />
        </div>
      </section>
    </div>
  )
}
