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
      <section className="relative z-[-1] -mt-40 bg-gradient-to-t from-[#e7be4f] to-[#e7be4f] pt-80">
        <div className="text-center">
          <Heading
            as="h1"
            className="font-artbrush !text-[78px] font-normal tracking-wide"
          >
            Submit Juice
          </Heading>
          <Heading
            as="h2"
            className="font-artbrush !text-4xl font-normal tracking-wide"
          >
            Logo Redesign
          </Heading>
        </div>

        <div className="flex justify-center pt-24">
          <Logos.submitJuice />
        </div>
      </section>

      <section className="container">
        <div className="-my-[320px] pb-[320px]">
          <Image
            src="/images/submit-juice/hero.webp"
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
              Submit Juice is here to empower startups and businesses by{" "}
              <TextHighlight variant="secondary" className="text-[34px]">
                simplifying
              </TextHighlight>{" "}
              their{" "}
              <TextHighlight variant="secondary" className="text-[34px]">
                online presence expansion
              </TextHighlight>
              , saving them time and effort through expert directory submissions
              and{" "}
              <TextHighlight variant="secondary" className="text-[34px]">
                SEO-boosting
              </TextHighlight>{" "}
              via backlink building.
            </Text>

            <div className="flex gap-32">
              <Text>
                We had a clear objective: to recreate the logo in a way that
                encapsulates their{" "}
                <TextHighlight>innovative approach</TextHighlight> to{" "}
                <TextHighlight>SEO</TextHighlight> while maintaining a friendly
                and approachable vibe. The goal was to design a logo that stands
                out in a competitive market and subtly{" "}
                <TextHighlight>reflects</TextHighlight> the{" "}
                <TextHighlight>core essence</TextHighlight> of{" "}
                <TextHighlight>their services</TextHighlight> without being
                overly literal.
              </Text>

              <Text className="w-full max-w-[360px]">
                <span className="block font-bold">Core Service/s</span>
                Custom Logo Design Associated Type & Colors
              </Text>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/submit-juice/logo-redesign.svg"
                width={570}
                height={441}
                alt="Logo redesign"
              />
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
                  From the outset, our goal was to create something that felt
                  clean and professional while still maintaining a{" "}
                  <TextHighlight>friendly touch</TextHighlight> — much like the{" "}
                  <TextHighlight>essence</TextHighlight> of Submit Juice itself.
                  The design process started with exploring various concepts
                  that would incorporate elements related to SEO, but in a
                  fresh, unique and innovative way. Throughout the process, I
                  experimented with{" "}
                  <TextHighlight>negative space</TextHighlight>, a technique we
                  believe can add subtle layers of meaning to a design.
                </Text>
                <Text>
                  To add some flair, we gave the letter{" "}
                  <TextHighlight>&apos;b&apos;</TextHighlight> a fun twist by
                  incorporating small circles resembling{" "}
                  <TextHighlight>juice drops</TextHighlight> and an abstract{" "}
                  <TextHighlight>backlinks chain</TextHighlight>, which ties
                  into the brand name and adds a playful element to the design.
                  By using negative space, the symbol is crafted that subtly
                  hints at a <TextHighlight>magnifying glass</TextHighlight>—an
                  allusion to the search and <TextHighlight>SEO</TextHighlight>{" "}
                  aspect of the brand. Also the complete icon was crafted using
                  elements from the letters, making the design{" "}
                  <TextHighlight>consistent</TextHighlight> and{" "}
                  <TextHighlight>unique</TextHighlight>.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24">
          <Image
            src="/images/submit-juice/02.webp"
            width={1170}
            height={765}
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
                name: "SJ Black",
                cmyk: "70/63/62/59",
                rgb: "40/40/39",
                hex: "#282827",
              }}
              secondary={{
                name: "SJ Yellow",
                cmyk: "10/23/81/0",
                rgb: "231/190/79",
                hex: "#e7be4f",
              }}
              background={{
                name: "SJ Purple",
                cmyk: "65/87/0/0",
                rgb: "116/69/155",
                hex: "#74459b",
              }}
              foreground={{
                name: "SJ White",
                cmyk: "5/6/5/0",
                rgb: "239/234/232",
                hex: "#e7eae8",
              }}
            />

            <Text className="font-artbrush !text-xl">
              Fresh colors for a new experience
            </Text>
          </div>

          {/* TODO: Make tidy and re-usable */}
          <div className="space-y-2">
            <div className="container flex h-full max-h-[500px] flex-col justify-between space-y-6 bg-[#F5F5F0] text-center shadow-card">
              <div className="flex h-full max-h-[250px] flex-col border-b border-[#959390] p-6">
                <Text className="font-artbrush text-sm">Axiforma</Text>
                <div className="mt-auto flex justify-center font-axiforma !text-[60px] font-semibold leading-none">
                  submit <br /> juice
                </div>
              </div>

              <div className="h-full pb-12">
                <Text className="font-artbrush text-sm">
                  POI Carbonic - Different Usage Font
                </Text>

                <div className="mt-10 flex justify-center">
                  <Logos.submitJuiceText />
                </div>
              </div>
            </div>

            <Text className="font-artbrush !text-xl">
              Custom-retouched font for a unique vibe
            </Text>
          </div>
        </div>
      </section>

      <section className="container mb-24 mt-48">
        <Heading className="mb-36 max-w-[650px]">
          Presence on <TextHighlight>screen, merch, print,</TextHighlight> and
          <TextHighlight> anything</TextHighlight> in between.
        </Heading>

        {/* Logos */}
        <div className="space-y-24">
          <Image
            src="/images/submit-juice/02.webp"
            width={1329}
            height={885}
            alt="image"
            className="mx-auto w-full"
          />

          <Image
            src="/images/submit-juice/03.webp"
            width={1170}
            height={781}
            alt="image"
            className="mx-auto"
          />

          <div>
            <div className="container">
              <Text className="py-9">
                Creating web <br /> a{" "}
                <TextHighlight>memorable experience.</TextHighlight>
              </Text>
            </div>

            <div className="relative mb-[320px]">
              <Image
                src="/images/submit-juice/04.webp"
                width={1005}
                height={670}
                alt="image"
                className="w-full max-w-[1005px]"
              />

              <Image
                src="/images/submit-juice/05.png"
                width={711}
                height={679}
                alt="image"
                className="absolute -bottom-60 -right-60 w-full max-w-[711px]"
              />
              <Image
                src="/images/submit-juice/06.png"
                width={760}
                height={507}
                alt="image"
                className="absolute -bottom-80 left-40 max-h-[507px] w-auto max-w-[760px]"
              />
            </div>
          </div>

          <div className="space-y-20 pt-40">
            <div className="flex justify-end">
              <Text className="max-w-[769px]">
                Upon request of the client, to add a bit more punch to the
                brand’s identity, we created a secondary icon that highlights
                the juice element. This version brings the playful aspect of the
                brand to the forefront, making the connection to the name more
                obvious while still keeping the design clean and professional.
              </Text>
            </div>
            <Image
              src="/images/submit-juice/hero.webp"
              width={670}
              height={376}
              alt="image"
              className="w-full max-w-[670px]"
            />
          </div>

          <Image
            src="/images/submit-juice/07.webp"
            width={1170}
            height={781}
            alt="image"
            className="w-full"
          />

          <div className="flex flex-col items-center justify-center space-y-24 pt-20">
            <div className="container w-full">
              <Text className="max-w-[769px]">
                Showcasing the brand&apos;s personality, the design extends to
                apparel and merch, blending style with subtlety. The clean lines
                and playful elements translated nicely, creating pieces that are
                eye-catching and effortlessly cool.
              </Text>
            </div>

            <div className="relative">
              <Image
                src="/images/submit-juice/08.webp"
                width={1309}
                height={758}
                alt="image"
                className="w-full max-w-[1309px]"
              />
              <Image
                src="/images/submit-juice/09.png"
                width={267}
                height={263}
                alt="image"
                className="absolute -bottom-56 right-56 z-10 w-full max-w-[267px]"
              />
              <Image
                src="/images/submit-juice/10.png"
                width={285}
                height={288}
                alt="image"
                className="absolute -bottom-40 right-20 w-full max-w-[285px]"
              />
            </div>
          </div>

          <div className="container space-y-[70px] pt-20">
            <Image
              src="/images/submit-juice/11.webp"
              width={552}
              height={336}
              alt="image"
              className="w-full max-w-[552px]"
            />

            <Image
              src="/images/submit-juice/12.webp"
              width={970}
              height={556}
              alt="image"
              className="w-full max-w-[970px]"
            />
          </div>
        </div>

        <div className="mt-[200px]">
          <div className="space-y-[60px]">
            <Text className="!text-5xl">
              &quot;Mende is an{" "}
              <TextHighlight variant="secondary">amazing</TextHighlight>{" "}
              designer! If you want{" "}
              <TextHighlight variant="secondary">the best</TextHighlight>, go to
              him!&quot;
            </Text>

            <div>
              <Text className="font-artbrush !text-4xl">Hunter Strozier</Text>
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
