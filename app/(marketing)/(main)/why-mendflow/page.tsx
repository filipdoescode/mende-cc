import { Metadata } from "next"
import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { ConnectBanner } from "@/components/connect-banner"
import { NewLineBreak } from "@/components/new-line-break"
import { TextHighlight } from "@/components/text-highlight"

export const metadata: Metadata = {
  title: "Why Mendflow",
}

export default function TheProcessPage() {
  return (
    <div className="space-y-10 lg:space-y-24">
      <section className="container">
        <Heading
          as="h1"
          className="flex flex-col border-b border-[#959390] pb-10 pt-24 text-5xl leading-[1.1] lg:pt-40 lg:!text-[160px]"
        >
          Why
          <TextHighlight variant="secondary" className="max-lg:text-[50px]">
            Mendflow
          </TextHighlight>
        </Heading>

        <Text className="max-w-[870px] pt-10 font-medium text-[#4C495C] lg:pt-24">
          Learn about the essence of Mendflow, where creativity meets
          authenticity in a space curated to showcase the diverse nature of my
          identity. As you delve into the meaning behind the name and logo,
          you&apos;ll uncover the deeper intentions and values driving this
          personal brand.
        </Text>
      </section>

      <section className="container">
        <div className="space-y-5 lg:space-y-[60px]">
          <div className="space-y-[10px] lg:space-y-[30px]">
            <Heading className="!text-xs font-semibold uppercase tracking-widest text-secondary lg:!text-xl">
              The story behind the name
            </Heading>

            <Text className="font-artbrush !text-base text-[#231F20] lg:!text-[32px]">
              Uncover the essence of the brand name
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[30px]">
            <Text>
              Choosing the name{" "}
              <TextHighlight>&quot;Mendflow&quot;</TextHighlight> embodies the
              core of who I am and what I bring to my work. This isn’t just a
              brand name; it’s a reflection of how I approach design and life
              itself.
              <NewLineBreak />
              The word <TextHighlight>&quot;mend&quot;</TextHighlight> speaks to
              my process—repairing, refining, and bringing{" "}
              <TextHighlight>thoughtful care</TextHighlight> to every project.
              It’s about taking what’s there, understanding its{" "}
              <TextHighlight>essence</TextHighlight>, and enhancing it to bring
              out its <TextHighlight>full potential</TextHighlight>. On a
              personal note, “mend” hints at{" "}
              <TextHighlight>my first name</TextHighlight>, making it feel{" "}
              <TextHighlight>authentic, connected</TextHighlight> and{" "}
              <TextHighlight>genuinely meaningful</TextHighlight>.{" "}
              <NewLineBreak />
              &quot;The <TextHighlight>&quot;flow&quot;</TextHighlight> in
              Mendflow represents more than just the creative process; it
              <TextHighlight>reflects</TextHighlight> my values and the{" "}
              <TextHighlight>essence </TextHighlight>
              of my approach. I believe in working in
            </Text>

            <Text>
              harmony with people, fostering a seamless{" "}
              <TextHighlight>connection</TextHighlight> where ideas can grow
              naturally and without restraint. It embodies
              <TextHighlight>adaptability, effortlessness</TextHighlight>, and
              the continuous pursuit of{" "}
              <TextHighlight>improvement</TextHighlight>, much like the{" "}
              <TextHighlight>flow state </TextHighlight>
              that fuels <TextHighlight>creativity</TextHighlight> and{" "}
              <TextHighlight>authenticity</TextHighlight>.
              <NewLineBreak />
              Together, Mendflow stands for continuous{" "}
              <TextHighlight>growth, empathy,</TextHighlight> and
              <TextHighlight> balance</TextHighlight>-the way I strive to
              repair, <TextHighlight>inspire</TextHighlight>, and{" "}
              <TextHighlight>align with visions</TextHighlight> while bringing
              them into the world with <TextHighlight>purpose</TextHighlight>.
              This idea connects with the concept of the enso in Zen
              philosophy—a circle that symbolizes{" "}
              <TextHighlight>completeness, simplicity,</TextHighlight> and the
              <TextHighlight>beauty of imperfection</TextHighlight>. Just like
              the ensō, my work at Mendflow embraces these timeless principles,
              weaving <TextHighlight>mindfulness</TextHighlight> and{" "}
              <TextHighlight>meaning</TextHighlight> into every project.
            </Text>
          </div>

          <div className="flex justify-center py-20 lg:py-32">
            <Image
              src="/images/why-mendflow/logo.svg"
              width={570}
              height={117}
              alt="Mendflow"
              className="max-lg:w-[154px]"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-10 lg:space-y-[60px]">
          <div className="space-y-[10px] lg:space-y-[30px]">
            <Heading className="!text-xs uppercase tracking-widest text-secondary lg:!text-lg">
              Logo meaning
            </Heading>

            <Text className="max-w-[670px] font-artbrush !text-base text-[#231F20] lg:!text-[32px]">
              Delve into the symbolism embedded within the logo of Mende&apos;s
              Creative Corner. Behind its design lies a story, a narrative that
              reflects the essence of my brand and identity.
            </Text>
          </div>

          <Text className="max-w-[670px]">
            I believe in a simple yet meaningful life, which is reflected in the
            design style of the logo. It appears simple at first glance, but it
            holds deeper meanings that resonate with my values and philosophy.
          </Text>

          <div className="grid grid-cols-1 pb-20 lg:grid-cols-2">
            <Text>
              The Mendflow logo is a <TextHighlight>minimal</TextHighlight> and{" "}
              <TextHighlight>purpose-driven</TextHighlight>{" "}
              <TextHighlight>typographic design</TextHighlight>, created to
              embody both <TextHighlight>the brand&apos;s</TextHighlight> and{" "}
              <TextHighlight>my personal values.</TextHighlight>
              Every detail has been carefully considered to ensure it reflects
              the <TextHighlight>balance, authenticity,</TextHighlight> and{" "}
              <TextHighlight>meaning</TextHighlight> behind the design.{" "}
              <NewLineBreak />
              The font itself is <TextHighlight>
                custom-designed,
              </TextHighlight>{" "}
              making it <TextHighlight>unique</TextHighlight> to Mendflow. The
              connection between the letters &quot;f&quot; and &quot;l&quot; and
              &quot;o&quot; and &quot;w&quot; visually mirrors{" "}
              <TextHighlight>the concept of flow,</TextHighlight> aligning with
              the <TextHighlight>seamless</TextHighlight> and{" "}
              <TextHighlight>natural rhythm`</TextHighlight> the brand promotes.
              This connection subtly separates the &quot;flow&quot; from the
              &quot;mend&quot; part, with a deliberate choice of contrasting
              colors to <TextHighlight>emphasize</TextHighlight> their
              individual yet harmonious roles.
            </Text>

            <Text>
              The <TextHighlight>centerpiece</TextHighlight> of the logo is the{" "}
              <TextHighlight>enso symbol</TextHighlight>, thoughtfully
              integrated into the &quot;o&quot; of &quot;flow.&quot; The ensō,
              drawn with a single, fluid brushstroke, captures the essence of
              <TextHighlight> mindful creativity</TextHighlight> when the mind
              is free to let the body create—an approach I adopt in my design
              process as well. <NewLineBreak />
              Together, these elements create a logo that is{" "}
              <TextHighlight>clean, meaningful, </TextHighlight>
              and <TextHighlight>aligned</TextHighlight> with the{" "}
              <TextHighlight>core principles</TextHighlight> of Mendflow. It’s a
              design that speaks to the brand’s focus on thoughtful care,
              collaboration, and continuous growth—offering{" "}
              <TextHighlight>a true</TextHighlight> and{" "}
              <TextHighlight>purposeful representation</TextHighlight> of the
              brand’s identity and my personal connection to it.
            </Text>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container">
          <div className="space-y-5 py-12 text-center lg:space-y-16 lg:py-24">
            <Heading className="font-artbrush font-normal tracking-wide !text-tertiary">
              Final Thoughts
            </Heading>

            <div className="flex flex-col gap-10 lg:gap-24">
              <Text className="mx-auto max-w-[1170px] text-[#EEEEEA]">
                In essence, Mendflow isn&apos;t just about design; it&apos;s a
                reflection of who I am and what I stand for. Each element, from
                the carefully crafted logo to the thoughtful selection of the
                brand name, embodies my values, aspirations, and commitment to
                authenticity. As we team up through this creative process, I
                believe you&apos;ll gain a deeper understanding of the passion
                and dedication that underpin every project.
              </Text>

              <Text className="mx-auto max-w-[400px] font-artbrush !text-base text-[#EEEEEA] lg:!text-[32px]">
                Let&apos;s keep exploring, creating, and spreading positivity.
                Together, we&apos;ll inspire and make a meaningful impact in the
                world.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-40">
        <ConnectBanner />
      </section>
    </div>
  )
}
