import Image from "next/image"
import Link from "next/link"
import Image1 from "@/public/images/my-story/1.webp"
import Image2 from "@/public/images/my-story/2.webp"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { HeadingHighlight } from "@/components/heading-highlight"

const pageNavigation = [
  {
    title: "Who am i",
    href: "#who-am-i",
  },
  {
    title: "Design Journey & Expertise",
    href: "#design-journey",
  },
]

export default function MyStoryPage() {
  return (
    <div className="space-y-24">
      <section className="container">
        <Heading
          as="h1"
          className="flex flex-col border-b border-[#959390] pb-10 pt-40 !text-[160px] leading-[1.1]"
        >
          Let me <br /> properly <br />
          <HeadingHighlight>Introduce Myself</HeadingHighlight>
        </Heading>
      </section>

      <section className="container space-y-12">
        <nav>
          <ul className="flex">
            {pageNavigation.map((item, index) => (
              <li key={item.href + index}>
                <Link href={item.href} className="flex">
                  <Text className="!text-xl font-semibold uppercase tracking-widest underline transition-colors hover:text-secondary">
                    {item.title}
                  </Text>

                  {index !== pageNavigation.length - 1 && (
                    <span className="px-[10px] text-[#231F20]" aria-hidden>
                      •
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Image src={Image1} alt="Mende Mitreski" />
        </div>
      </section>

      <section id="who-am-i" className="container">
        <div className="grid grid-cols-2 gap-x-32">
          <div>
            <div>
              <Heading className="!text-lg text-secondary">WHO AM I</Heading>

              <Text className="font-artbrush text-[#231F20]">
                Not a designer! Not just a designer, though.
              </Text>
            </div>

            <div className="flex flex-col gap-8">
              <Text>
                A human being who is a firm believer in the power of helping
                others and build meaningful connections with both people and
                the environment.
              </Text>

              <Text>
                Through my work as a visual identity designer, I aim to forge
                meaningful connections between individuals and businesses. While
                I&apos;m passionate about design and could talk about it
                endlessly, my true purpose lies in using creativity to spread
                kindness and positivity. For me, creativity isn&apos;t just
                creating visually appealing work—it&apos;s about making a
                meaningful impact on the world around us.
              </Text>

              <Text>
                By embracing authenticity and staying true to myself, I hope to
                leave a positive mark and inspire others to do the same,
                creating a ripple effect of positivity that enriches lives and
                makes the world a more enjoyable place
              </Text>
            </div>
          </div>

          <div className="flex justify-end">
            <Image
              src={Image2}
              alt="Mende"
              width={440}
              height={770}
              className="self- h-auto max-h-[770px] w-full"
            />
          </div>

          <div>
            <blockquote className="py-12 text-center font-artbrush text-[26px] text-[#4C495C]">
              I prefer to see myself as someone who&apos;s here to simply learn,
              celebrate, and spread my truth, all while inspiring others to
              discover their own.
            </blockquote>

            <hr className="bg-[#959390]" />

            <Text className="py-4">
              Get to know me better by checking out the &quot;Fun Facts &
              Stories&quot; section below. It&apos;s filled with interesting
              tidbits and engaging stories that give you a closer look into my
              life and experiences as a human being.
            </Text>
          </div>

          <div className="flex flex-col justify-end gap-4 py-4">
            <Heading
              as="h3"
              className="font-inter text-lg uppercase text-secondary"
            >
              WHAT DO I STAND FOR
            </Heading>

            <Text>
              Understand that everyone carries a story, not always visible on
              the surface, so let&apos;s be kind to each other. In a world where
              kindness often takes a backseat, I firmly believe it&apos;s not
              just a virtue—
              <span className="font-artbrush">kindness is downright cool!</span>
            </Text>
          </div>
        </div>
      </section>
    </div>
  )
}
