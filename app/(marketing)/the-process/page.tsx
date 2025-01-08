import { ROUTES } from "@/lib/routes"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { ConnectBanner } from "@/components/connect-banner"
import { DesignProcessTable } from "@/components/design-proces-table"
import { MMLink } from "@/components/mm-link"
import { TextHighlight } from "@/components/text-highlight"

const todos_1 = [
  {
    title: "Clarifying Details",
    description:
      "Before beginning a Word Mapping process, I perform an extensive study based on the prior info I will receive from you.",
  },
  {
    title: "Word Mapping",
    description:
      "In its simplest form, it is a way of associating words with other words related to our already defined brief. Doing this helps me see a much bigger picture, translating into more possibilities. This process produces a picture and gets my mind thinking about the creative possibilities rather than the obvious solutions, like a design for a coffee shop having the logo as a coffee cup.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "This is an idea generator, a way of changing words and thoughts into loose concepts. This process allows me to quickly and effectively figure out viable directions for the design and allows me to see what is and isn't worth exploring.",
  },
]

const todos_2 = [
  {
    title: "Defining And Redefining Ideas",
    description:
      "After conducting Word Mapping and Rapid Prototyping, I meticulously consider the options before settling on the most promising idea to develop further, ultimately culminating in the comprehensive preparation of an informative presentation.",
  },
  {
    title: "Design Execution",
    description:
      "After pinpointing the most suitable concept to pursue, I immerse myself in the process of crafting the design/s, utilizing the necessary tools and programs to bring the vision to life.",
  },
  {
    title: "Presenting The Final Outcome",
    description:
      "Presenting the final product involves showcasing the design concept in real-world scenarios relevant to your needs. Typically, I deliver the results through a PDF presentation, which includes the designs, along with explanations of the design process and its meaning.",
  },
]

export default function TheProcessPage() {
  return (
    <div className="space-y-28">
      <section className="container">
        <Heading
          as="h1"
          className="flex flex-col border-b border-[#959390] pb-10 pt-40 text-5xl leading-[1.1] lg:!text-[160px]"
        >
          Guiding <br /> through the <br />
          <TextHighlight variant="secondary" className="max-lg:text-[50px]">
            Design Process
          </TextHighlight>
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

      <section className="container">
        <div className="space-y-[60px]">
          <Heading as="h3">MY TO DO’S</Heading>

          <Text className="max-w-[670px]">
            Once we&apos;ve got the scoop on your brand&apos;s essence, I kick
            off my design process. From{" "}
            <span className="font-artbrush">Clarifying Details</span> to{" "}
            <span className="font-artbrush">
              Word Mapping, Rapid Prototyping, Defining Ideas, Design Execution,
            </span>{" "}
            and finally, presenting the final outcome. During the entire
            process, I&apos;ll keep you updated, however, for these phases,
            you&apos;ll be completely free from any commitments until the final
            results are ready.
          </Text>

          <div className="flex gap-7">
            <ul className="artbrush-marker flex grow basis-full list-disc flex-col gap-5 px-10">
              {todos_1.map((todo, index) => (
                <li key={todo.title + index} className="">
                  <Text className="text-[32px]">
                    <span className="font-artbrush text-[32px]">
                      {todo.title} -{" "}
                    </span>{" "}
                    {todo.description}
                  </Text>
                </li>
              ))}
            </ul>

            <ul className="flex grow basis-full list-disc flex-col gap-5 px-10">
              {todos_2.map((todo, index) => (
                <li key={todo.title + index} className="">
                  <Text className="text-[32px]">
                    <span className="font-artbrush text-[32px]">
                      {todo.title} -{" "}
                    </span>{" "}
                    {todo.description}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto max-w-[800px] space-y-10 py-10 text-center">
            <Text className="font-artbrush !text-[32px] text-primary">
              There&apos;s always room for flexibility when it comes to the
              process of how we work together. As I’ve mentioned before, we’re a
              team, and we’ll find the approach that works best for both of us.
            </Text>

            <Text className="font-artbrush !text-[32px] text-primary">
              The purpose of this approach is to ensure that this process is not
              only helpful and productive but also enjoyable for us!{" "}
            </Text>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 gap-20 py-20">
            <Heading className="!leading-[1.3] !text-[#EEEEEA]">
              Understanding <br /> the One Concept Approach
            </Heading>

            <div className="flex flex-col gap-10">
              <Text className="font-artbrush !text-[32px] text-[#EEEEEA]">
                Curious about the One Concept Approach and why it&apos;s my
                go-to?
              </Text>

              <Text className="text-[#EEEEEA]">
                This is an opportunity to acquaint you with my One Concept
                Approach—a method you&apos;re bound to find practical and
                effective!
              </Text>

              <div>
                <MMLink
                  href={ROUTES.theProcess}
                  variant="tertiary"
                  className="!text-[24px]"
                >
                  Learn more about it
                </MMLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40">
        <ConnectBanner />
      </section>
    </div>
  )
}
