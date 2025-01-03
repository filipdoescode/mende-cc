import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { Icons } from "@/components/icons"
import { Logos } from "@/components/logos"
import { MMLink } from "@/components/mm-link"
import { PalettePreview } from "@/components/palette-preview"
import { TextHighlight } from "@/components/text-highlight"

export default function ContactPage() {
  return (
    <div>
      <section className="relative z-[-1] -mt-40 bg-gradient-to-t from-[#F4A382] to-[#F4A382] pb-16 pt-80">
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

      <section className="container space-y-10">
        <Heading className="font-artbrush !text-[32px] font-normal">
          Type and colors
        </Heading>

        <div className="grid grid-cols-2 gap-[30px]">
          <div className="space-y-2">
            <PalettePreview
              logo={<Icons.mcfLogoWhite />}
              primary={{
                name: "MCF Blue",
                cmyk: "94/78/49/53",
                rgb: "19/39/61",
                hex: "#11273d",
              }}
              secondary={{
                name: "MCF Orange",
                cmyk: "1/43/47/0",
                rgb: "244/163/130",
                hex: "#f4a382",
              }}
              background={{
                name: "MCF Black",
                cmyk: "73/67/65/78",
                rgb: "26/26/26",
                hex: "#1a1a1a",
              }}
              foreground={{
                name: "MCF White",
                cmyk: "3/2/4/0",
                rgb: "245/245/240",
                hex: "#f5f5f0",
              }}
            />

            <Text className="font-artbrush !text-xl">
              Welcoming colors with a purpose
            </Text>
          </div>

          {/* TODO: Make tidy and re-usable */}
          <div className="space-y-2">
            <div className="container flex h-full max-h-[500px] flex-col justify-between space-y-6 bg-[#242223] text-center">
              <div className="flex h-full max-h-[250px] flex-col gap-12 border-b border-[#959390] p-6">
                <Text className="font-artbrush text-sm text-[#DADADA]">
                  Berlin Sans FB & Blogger Sans - Logo fonts
                </Text>
                <div className="flex justify-center">
                  <Logos.mcfText />
                </div>
              </div>

              <div className="h-full space-y-[55px]">
                <Text className="font-artbrush text-sm text-[#DADADA]">
                  POI Carbonic - Different Usage Font
                </Text>

                <Text className="text-[#DADADA]">
                  Marasco Charitable Foundation
                </Text>
              </div>
            </div>

            <Text className="font-artbrush !text-xl">
              Font combination for a heartfelt cause
            </Text>
          </div>
        </div>
      </section>

      <section className="container mb-24 mt-48">
        <Heading className="mb-36">The Logo in Action</Heading>

        {/* Logos */}
        <div className="space-y-24">
          <Image
            src="/images/mcf/02.webp"
            width={1170}
            height={687}
            alt="image"
            className="mx-auto w-full"
          />

          <div className="relative flex justify-end">
            <Image
              src="/images/mcf/03.png"
              width={856}
              height={739}
              alt="image"
              className="absolute -left-20 top-4 mx-auto w-full max-w-[856px]"
            />

            <Image
              src="/images/mcf/04.webp"
              width={778}
              height={627}
              alt="image"
              className="w-full max-w-[778px]"
            />
          </div>

          <div className="flex gap-[30px]">
            <Image
              src="/images/mcf/05.webp"
              width={770}
              height={513}
              alt="image"
              className="w-full max-w-[770px]"
            />

            <Text className="py-16">
              With print materials like badges and apparel, the design spreads
              kindness while staying true to the foundation’s heartfelt mission.
            </Text>
          </div>

          <div className="!-mt-20 pb-20">
            <Image
              src="/images/mcf/06.png"
              width={916}
              height={749}
              alt="image"
              className="ml-auto w-full max-w-[916px]"
            />
          </div>

          <Image
            src="/images/mcf/07.webp"
            width={1167}
            height={769}
            alt="image"
            className="ml-auto w-full"
          />

          <div className="flex gap-24">
            <Image
              src="/images/mcf/08.webp"
              width={785}
              height={940}
              alt="image"
              className="w-full max-w-[785px]"
            />

            <div className="flex flex-col justify-between">
              <Text>
                Spreading positivity on a larger scale, designed to inspire, the
                posters and wall art extend the foundation’s mission, creating
                powerful visuals that resonate with everyone who sees them.
              </Text>

              {/* TODO: Badge */}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-[50px]">
            <Image
              src="/images/mcf/09.webp"
              width={769}
              height={506}
              alt="image"
              className="w-full max-w-[769px]"
            />
            <Image
              src="/images/mcf/10.webp"
              width={970}
              height={647}
              alt="image"
              className="w-full max-w-[970]"
            />
          </div>
        </div>

        <div className="mt-[200px]">
          <div className="space-y-[60px]">
            <Text className="!text-5xl">
              <span className="font-artbrush">&quot;</span>Over the moon, he is
              fantastic designer. The logo is exactly what we need. I can not be{" "}
              <TextHighlight variant="secondary">happier</TextHighlight>. Very{" "}
              <TextHighlight variant="secondary">talented</TextHighlight>,{" "}
              <TextHighlight variant="secondary">fast</TextHighlight> and{" "}
              <TextHighlight variant="secondary">professional</TextHighlight>,
              what else can you ask for. Mende is amazing, I will use him over
              and over. <br />
              You won&apos;t find better.
              <span className="font-artbrush">&quot;</span>
            </Text>

            <div>
              <Text className="font-artbrush !text-4xl">Tony Marasco</Text>
              <Text className="!text-4xl">Founder</Text>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-24">
        <nav className="flex w-full justify-end">
          <MMLink href="/" variant="secondary">
            Next Project
          </MMLink>
        </nav>
      </section>
    </div>
  )
}
