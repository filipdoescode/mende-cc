import { Metadata } from "next"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { ConnectBanner } from "@/components/connect-banner"
import { NewLineBreak } from "@/components/new-line-break"
import { TextHighlight } from "@/components/text-highlight"

export const metadata: Metadata = {
  title: "The One Concept Approach",
}

export default function TheProcessPage() {
  return (
    <div className="space-y-10 lg:space-y-24">
      <section className="container">
        <Heading
          as="h1"
          className="flex flex-col border-b border-[#959390] pb-10 pt-24 text-5xl leading-[1.1] lg:pt-40 lg:!text-[160px]"
        >
          The
          <TextHighlight variant="secondary" className="max-lg:text-[50px]">
            One Concept <br />
            Approach
          </TextHighlight>
        </Heading>

        <div className="space-y-[60px] pt-10">
          <Text className="max-w-[870px] font-medium text-[#4C495C] lg:pt-24">
            Simplicity at its best. Why the One Concept Approach is more than
            just a design choice—it&apos;s a philosophy that brings distinctive
            solutions for your brand.
          </Text>

          <Text className="max-w-[570px]">
            As you might expect, the one-concept approach is a design method I
            follow to present a{" "}
            <TextHighlight>
              Single, Carefully Crafted Brand Concept.
            </TextHighlight>{" "}
            Instead of overwhelming you with numerous options, this focused
            approach is designed to be more effective in creating the greatest
            outcomes for your business.
          </Text>
        </div>
      </section>

      <section className="container">
        <div className="space-y-5 lg:space-y-[60px]">
          <div className="space-y-[10px] lg:space-y-[30px]">
            <Heading className="!text-xs font-semibold uppercase tracking-widest text-secondary lg:!text-xl">
              This concept produces deeper and more meaningful outcomes
            </Heading>

            <Text className="font-artbrush !text-base text-[#231F20] lg:!text-[32px]">
              Does this concept result in a lighter workload?
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[30px]">
            <Text>
              Using the one-concept approach doesn&apos;t mean less work for me.
              In the phase of defining ideas, based on pre-gathered data, I
              delve deep into design exploration - sketching different ideas and
              strategizing—before{" "}
              <TextHighlight>
                We Select The Best Direction And I Dedicate All My Focus Into
                It.
              </TextHighlight>{" "}
              <NewLineBreak />
              Instead of juggling multiple weaker concepts, I fully engage in
              the creative process,{" "}
              <TextHighlight>Giving 100% Attention</TextHighlight> to crafting a
              <TextHighlight>
                Single, Carefully Thought-Out Concept
              </TextHighlight>{" "}
              and making sure it&apos;s just right.
            </Text>

            <Text>
              This allows me to present not just a logo but a complete visual
              identity—a product in its entirety. By showcasing real-world
              examples of how the logo integrates into various contexts,{" "}
              <TextHighlight>I Take The Guesswork Out For You.</TextHighlight>
              <br />
              It&apos;s not your responsibility to envision the complete
              branding during the logo creation process,{" "}
              <TextHighlight>
                That&apos;s My Job As A Designer.
              </TextHighlight>{" "}
              This approach ensures a{" "}
              <TextHighlight>Concise, Harmonious,</TextHighlight> and{" "}
              <TextHighlight>Meaningful Result</TextHighlight>, making it easier
              for you to grasp the final outcome and make informed decisions.
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
                In conclusion, the One Concept Approach is designed to simplify
                and enhance the creative process. By focusing on one carefully
                crafted concept, I aim to take the weight off your shoulders and
                provide a streamlined experience that makes this journey
                smoother and more enjoyable for both of us. The goal is to
                provide a tailored solution that resonates with your brand,
                eliminating the need for overwhelming choices. I&apos;m here to
                guide you through this process, ensuring that your business
                thrives.
              </Text>

              <Text className="mx-auto max-w-[400px] font-artbrush !text-base text-[#EEEEEA] lg:!text-[32px]">
                It&apos;s all about making your branding creation experience as
                stress-free and purposeful as possible!
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
