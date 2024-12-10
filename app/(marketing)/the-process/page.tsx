import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { DesignProcessTable } from "@/components/design-proces-table"
import { HeadingHighlight } from "@/components/heading-highlight"

export default function TheProcessPage() {
  return (
    <div className="space-y-28">
      <section className="container">
        <Heading
          as="h1"
          className="flex flex-col border-b border-[#959390] pb-10 pt-40 text-5xl leading-[1.1] lg:!text-[160px]"
        >
          Guiding <br /> through the <br />
          <HeadingHighlight className="max-lg:text-[50px]">
            Design Process
          </HeadingHighlight>
        </Heading>

        <Text className="max-w-[870px] py-24">
          Ready to delve into the details of design process? Let&apos;s take a
          casual stroll through the process together. No frills, just a
          straightforward exploration of how we’ll bring your vision to life.
        </Text>
      </section>

      <section className="container">
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-[60px]">
            <div className="space-y-[30px]">
              <Heading className="!text-lg uppercase tracking-widest text-secondary">
                First thing first
              </Heading>

              <Text className="font-artbrush text-[#231F20]">
                Not a designer! Not just a designer, though.
              </Text>
            </div>

            <div className="space-y-[30px]">
              <Text>
                I&apos;m genuinely here to help you, so at this stage, I&apos;m
                putting the design aspect on hold and focusing on listening.
                Spend the most time to connect and understand you better — your
                needs, values, and mission.
              </Text>

              <Text>
                Not every time figuring out a business&apos;s problem and the
                right solution is evident to the client. That&apos;s where I
                come in, helping you identify the real issues and work toward
                solutions.
              </Text>
            </div>
          </div>

          <div className="my-auto">
            <blockquote className="mx-auto max-w-[511px] py-[10px] text-center font-artbrush text-[32px] text-[#4C495C] lg:py-12">
              The essence lies in effectively combining strategy and design —
              neither truly works without the other. Both are essential
              formeaningful impact!
            </blockquote>
          </div>

          {/* TODO: Add image */}
          <div className="col-span-2 h-[454px] bg-[#D9D9D9]" />
        </div>
      </section>

      <section className="container">
        <div className="space-y-[60px]">
          <Text className="font-artbrush text-[#231F20]">
            Gather, Analyze, Visualize, Implement, Deliver.
          </Text>

          <div className="flex max-w-[670px] flex-col gap-8">
            <Heading className="!text-lg uppercase tracking-widest text-secondary">
              OUR TO DO’S
            </Heading>

            <Text>
              After agreeing that building/redesigning a visual identity will
              help you achieve your goals—My focus is on guiding you through the
              strategic branding process, culminating in a visual identity that
              aligns with your vision.
            </Text>

            <ul className="flex list-disc flex-col gap-8 px-8">
              <li>
                <Text>
                  At the beginning of the creation process, your role is
                  pivotal.
                  <span className="font-artbrush">
                    {" "}
                    We&apos;re a team from the Get-Go
                  </span>
                  , and I&apos;m here to help you create an{" "}
                  <span className="font-artbrush">Effective Brief</span>.
                  Together, we&apos;ll explore your business&apos;s values and
                  goals through thoughtful questions, ensuring we build the
                  foundation for an identity that truly represents you.
                </Text>
              </li>
              <li>
                <Text>
                  I&apos;ll also encourage you to share{" "}
                  <span className="font-artbrush">A Mood board</span>—a
                  visualsnapshot of your style and design preferences. It&apos;s
                  our way of aligning visions before diving into the creative
                  process. Your input is essential, ensuring we&apos;re both in
                  sync.
                </Text>
              </li>
            </ul>
          </div>

          <div className="pt-24">
            <DesignProcessTable />
          </div>
        </div>
      </section>
    </div>
  )
}
