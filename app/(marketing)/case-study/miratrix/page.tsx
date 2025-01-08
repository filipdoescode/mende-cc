import Image from "next/image"

import { ROUTES } from "@/lib/routes"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { Logos } from "@/components/logos"
import { MMLink } from "@/components/mm-link"
import { NewLineBreak } from "@/components/new-line-break"
import { TextHighlight } from "@/components/text-highlight"

const miratrixPalette = [
  {
    name: "Miratrix Black",
    hex: "#323232",
    rgb: "50/50/50",
    cmy: "70/63/62/59",
  },
  {
    name: "Miratrix Green",
    hex: "#07b68a",
    rgb: "7/12/138",
    cmy: "76/0/62/0",
  },
  {
    name: "Miratrix Dark Purple",
    hex: "#3a2567",
    rgb: "58/37/103",
    cmy: "92/100/24/20",
  },
  {
    name: "Miratrix White",
    hex: "#f7f7f4",
    rgb: "247/247/244",
    cmy: "2/1/3/0",
  },
]

export default function ContactPage() {
  return (
    <div>
      <section className="relative z-[-1] -mt-40 bg-gradient-to-t from-[#35bd8c] to-[#35bd8c] pt-80">
        <div className="text-center">
          <Heading
            as="h1"
            className="font-artbrush !text-[78px] font-normal tracking-wide"
          >
            Miratrix
          </Heading>
          <Heading
            as="h2"
            className="font-artbrush !text-4xl font-normal tracking-wide"
          >
            Logo Redesign
          </Heading>
        </div>

        <div className="flex justify-center pt-24">
          <Logos.miratrixPattern />
        </div>
      </section>

      <section className="container">
        <div className="-my-[240px] pb-[240px]">
          <Image
            src="/images/miratrix/hero.webp"
            width={1283}
            height={735}
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
              Expert{" "}
              <TextHighlight variant="secondary">Web3 guidance</TextHighlight>{" "}
              to take your business to the next level. Providing no-nonsense
              consultancy informed by hands-on knowledge of the{" "}
              <TextHighlight variant="secondary">crypto sector</TextHighlight>,
              with plus fifteen years of{" "}
              <TextHighlight variant="secondary">
                marketing experience
              </TextHighlight>
              .
            </Text>

            <div className="flex gap-32">
              <Text>
                Helping businesses exceed targets for traffic,{" "}
                <TextHighlight>engagement</TextHighlight> and{" "}
                <TextHighlight>sales</TextHighlight>, by focusing on{" "}
                <TextHighlight>culture</TextHighlight> and
                <TextHighlight> strategy</TextHighlight>.Providing expert,
                zero-BS mentoring to teams, ensuring that staff develop a
                culture that sustains the strategy.
              </Text>

              <div className="w-full space-y-4">
                <Text>
                  <span className="block font-bold">Core Service/s</span>
                </Text>

                <ul>
                  <li>
                    <Text>Custom Logo Design </Text>
                  </li>
                  <li>
                    <Text>Custom Type & Pattern</Text>
                  </li>
                  <li>
                    <Text>CAssociated Typography & Colors</Text>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/miratrix/logo.svg"
                width={371}
                height={323}
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
                <Text className="">
                  The logo it&apos;s not just some boring crypto-graphic. This
                  symbol got a deeper meaning that&apos;s all about{" "}
                  <TextHighlight>values</TextHighlight> and
                  <TextHighlight> ideas</TextHighlight>. It&apos;s more than
                  just a pretty image. <NewLineBreak /> Here&apos;s where it
                  gets really interesting. The client has a pretty unique blend
                  of experience with both{" "}
                  <TextHighlight>marketing</TextHighlight> and{" "}
                  <TextHighlight> crypto</TextHighlight>, so I thought, why not
                  create a symbol that showcases that expertise? And that&apos;s
                  exactly what I did! <NewLineBreak />
                  You&apos;ll notice two straight lines in the symbol -
                  they&apos;re more than just a couple of simple strokes. In
                  fact, they represent the{" "}
                  <TextHighlight>number two</TextHighlight> in Roman numerals.
                  One line signifies your{" "}
                  <TextHighlight>marketing experience</TextHighlight>, while the
                  other represents your{" "}
                  <TextHighlight>crypto expertise</TextHighlight>.{" "}
                  <NewLineBreak /> Now let&apos;s talk about the final touch
                  that really completes this symbol. I added a circle to the
                  design, not just for its aesthetic value, but to represent
                  <TextHighlight>growth, increase,</TextHighlight> and{" "}
                  <TextHighlight>scaling up</TextHighlight> - all important
                  aspects of any successful business. <NewLineBreak /> To tie
                  everything together, I placed{" "}
                  <TextHighlight>a point</TextHighlight> right in the middle of
                  the circle and the two lines, creating
                </Text>

                <Text>
                  a seamless connection that brings the entire symbol to life.
                  This point is connected to both lines and the circle, forming
                  a complete symbol that represents the{" "}
                  <TextHighlight>values </TextHighlight>and{" "}
                  <TextHighlight>ideas</TextHighlight> the brand stands for.{" "}
                  <NewLineBreak /> What&apos;s more, using{" "}
                  <TextHighlight>negative space</TextHighlight>, I crafted the
                  two lines and the dot to form the letter &quot;m&quot; the
                  initial of the name, miratrix. And when the dot and the circle
                  are seen together, they represent{" "}
                  <TextHighlight>a person</TextHighlight>
                  in an abstract way, emphasizing the personal touch that
                  miratrix brings to mentoring others and helping teams achieve
                  their goals. <NewLineBreak />{" "}
                  <span className="block font-semibold">
                    And here&apos;s the kicker!
                  </span>{" "}
                  The design of the lines from the symbol is used for the text
                  itself, for all the letters of the name, resulting in a{" "}
                  <TextHighlight>unique font</TextHighlight> that&apos;s
                  exclusively designed for this logo. I went all out and created
                  a <TextHighlight>custom font</TextHighlight> to ensure a{" "}
                  <TextHighlight>consistent</TextHighlight> and
                  <TextHighlight>cohesive</TextHighlight> design across the
                  entire logo. <NewLineBreak /> What&apos;s more, both the
                  symbol and the text are created
                  <TextHighlight> geometrically</TextHighlight>, resulting in a{" "}
                  <TextHighlight>modern, sleek,</TextHighlight> and{" "}
                  <TextHighlight>clean logo </TextHighlight>
                  that&apos;s chock-full of meaning.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="py-36">
          <Image
            src="/images/miratrix/01.webp"
            width={1170}
            height={765}
            alt="image"
            className="mx-auto w-full"
          />
        </div>
      </section>

      <section className="container space-y-10">
        <Heading className="font-artbrush !text-[32px] font-normal">
          Colors
        </Heading>
        <ul className="flex justify-between gap-10">
          {miratrixPalette.map((color) => (
            <li key={color.name} className="flex flex-col gap-12">
              <Logos.miratrix colorVariant={color.hex} />

              <div className="flex flex-col">
                <Text className="pb-[10px] font-artbrush !text-xl">
                  {color.name}
                </Text>

                <Text className="!text-xs">
                  <strong>CMYK: </strong>
                  {color.cmy}
                </Text>

                <Text className="!text-xs">
                  <strong>RGB: </strong>
                  {color.rgb}
                </Text>

                <Text className="!text-xs">
                  <strong>HEX: </strong>
                  {color.hex}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mb-24 mt-48 space-y-40">
        <div className="grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-16">
            <Image
              src="/images/miratrix/logo-structure.svg"
              width={468}
              height={339}
              alt="image"
              className="h-full max-h-[339px]"
            />
            <Image
              src="/images/miratrix/golden-ratio.svg"
              width={468}
              height={290}
              alt="image"
              className="h-full max-h-[290px]"
            />
          </div>

          <div className="space-y-10">
            <Heading className="font-artbrush !text-[32px] font-normal">
              Golden Ratio
            </Heading>

            <Text className="h-full">
              The logo was created using the golden ratio per the client&apos;s
              request, and I am really glad he noted that in the brief. This
              gave me a <TextHighlight>clear direction</TextHighlight> and
              helped me to create a logo that matched his expectations and
              represented the brand in the best possible way. <NewLineBreak />{" "}
              By incorporating the golden ratio into the design, I was able to
              create a logo that not only meets the requirements, but also takes
              advantage of the{" "}
              <TextHighlight>mathematical principles</TextHighlight> that are
              found in nature and have been used in design for centuries. This
              approach helped me to create a logo that is not only{" "}
              <TextHighlight>visually appealing,</TextHighlight> but also feels
              <TextHighlight> balanced</TextHighlight> and{" "}
              <TextHighlight>harmonious</TextHighlight> to the viewer.{" "}
              <NewLineBreak />
              Incorporating the golden ratio into a logo design is a{" "}
              <TextHighlight>tried</TextHighlight> and
              <TextHighlight> true method</TextHighlight> for creating a
              visually appealing and{" "}
              <TextHighlight>harmonious design</TextHighlight> that will make a
              lasting impression.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-32">
          <div className="space-y-10">
            <Heading className="font-artbrush !text-[32px] font-normal">
              Custom Pattern
            </Heading>

            <Text className="h-full">
              Although the project brief did not include a request for a pattern
              design, when I saw the moodboard, my brain started buzzing with
              ideas. The board was just chock-full of these{" "}
              <TextHighlight>cool, funky patterns</TextHighlight>, and I knew
              that we had to incorporate that into our design somehow.{" "}
              <NewLineBreak /> After putting in the work, I&apos;m thrilled to
              say that the resulting logo design served as the foundation for a{" "}
              <TextHighlight>killer pattern</TextHighlight> that is
              <TextHighlight> versatile</TextHighlight> and{" "}
              <TextHighlight>adaptable</TextHighlight> for a wide range of
              applications. The{" "}
              <TextHighlight>
                &quot;Theory of Repeating Patterns&quot;
              </TextHighlight>{" "}
              was used during the design process to ensure that the pattern
              maintains its shape, regardless of its use. <NewLineBreak /> The
              project objectives were successfully met by taking into account
              client’s needs and
              <TextHighlight> design principles</TextHighlight>. The resulting
              logo and <TextHighlight>pattern designs</TextHighlight> are not
              only <TextHighlight>aesthetically pleasing</TextHighlight> but
              also highly <TextHighlight>versatile</TextHighlight> and
              <TextHighlight> consistent</TextHighlight> with the brand
              identity.
            </Text>
          </div>

          <div className="flex flex-col justify-center gap-16">
            <Image
              src="/images/miratrix/02.png"
              width={590}
              height={381}
              alt="image"
              className="h-full max-h-[381px] w-auto"
            />
          </div>

          <Logos.miratrixPattern colorVariant="#01B68A" aria-hidden />
        </div>

        <Image
          src="/images/miratrix/03.webp"
          width={1170}
          height={779}
          alt="image"
          className="mx-auto h-auto w-full"
        />
      </section>

      <section className="container space-y-36">
        <div>
          <Heading>
            The logo in its <NewLineBreak />
            <TextHighlight>real -life scenarios</TextHighlight>
          </Heading>
        </div>

        <div className="space-y-24">
          <Image
            src="/images/miratrix/04.webp"
            width={1329}
            height={885}
            alt="image"
            className="mx-auto h-auto w-full"
          />

          <div className="flex items-center gap-11">
            <Image
              src="/images/miratrix/05.png"
              width={584}
              height={646}
              alt="image"
              className="mx-auto max-h-[646px] w-auto"
            />

            <Image
              src="/images/miratrix/06.png"
              width={397}
              height={423}
              alt="image"
              className="mx-auto max-h-[423px] w-auto"
            />
          </div>

          <Image
            src="/images/miratrix/07.webp"
            width={1170}
            height={781}
            alt="image"
            className="mx-auto h-auto w-auto"
          />

          <div className="flex">
            <Image
              src="/images/miratrix/08.png"
              width={710}
              height={1001}
              alt="image"
              className="mx-auto h-auto w-full"
            />

            <Image
              src="/images/miratrix/09.webp"
              width={609}
              height={487}
              alt="image"
              className="my-auto max-h-[487px] w-auto"
            />
          </div>

          <Image
            src="/images/miratrix/10.webp"
            width={1170}
            height={780}
            alt="image"
            className="my-auto h-auto w-full"
          />
        </div>

        <div className="mt-[200px]">
          <div className="space-y-[60px]">
            <Text className="!text-5xl">
              &quot;
              <TextHighlight variant="secondary">Responsive</TextHighlight> and
              <TextHighlight variant="secondary"> happy to help</TextHighlight>,
              Mende delivered{" "}
              <TextHighlight variant="secondary">
                high-quality designs
              </TextHighlight>{" "}
              that really hit the mark.&quot;
            </Text>

            <div>
              <Text className="font-artbrush !text-4xl">Hunter Strozier</Text>
              <Text className="!text-4xl">Founder</Text>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-24">
        <nav className="flex w-full justify-end">
          <MMLink
            href={ROUTES.theResults + "#additional-designs"}
            variant="secondary"
          >
            Additional Designs
          </MMLink>
        </nav>
      </section>
    </div>
  )
}
