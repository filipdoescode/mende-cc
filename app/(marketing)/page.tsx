import Image from "next/image"

const traits = ["Visual Identity Designer", "Human Being", "All-round creative"]

export default function Home() {
  return (
    <div>
      <section className="container py-64">
        <h1 className="max-[970px] mx-auto text-center text-6xl">
          Build a Brand Presence that <br />
          Represents You and Connects with <br /> your target audience
        </h1>
      </section>

      <section className="container max-w-screen-2xl px-14">
        <div className="border-b border-[#959390] pb-[25px]">
          <ul className="flex justify-between">
            {/* TODO: Inter font */}
            {traits.map((trait) => (
              <li key={trait} className="text-xl text-[#4C495C]">
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="container flex gap-[30px] py-32">
          <Image
            // src={Image_1}
            src="/images/landing/1.webp"
            width={570}
            height={984}
            alt="Mende Mitreski"
          />
          <div>
            <h2>Why am I doing this</h2>
            <p>
              I&apos;m driven by a simple mission—to make a positive impact and
              help everyone live their absolute best lives. On a professional
              level, this translates into crafting visual identities for
              businesses and helping other humans and companies achieve their
              goals, a journey where design becomes more than
              aesthetics—it&apos;s about creating a visual narrative that
              connects and elevates. But it doesn&apos;t end there. Finding
              fulfillment in guiding young designers as they navigate their
              careers, I aim to share what I&apos;ve learned and experienced
              through my journey. It goes beyond the design realm, there&apos;s
              a deeper purpose; it&apos;s about instilling a love for producing
              meaningful creations and working passionately to create value for
              everything around us. My goal is to create a ripple effect where
              my work touches businesses, other designers, and everyone
              involved—It&apos;s all about spreading kindness and fostering a
              culture of genuine connections.
            </p>
            <i>And this is only my new starting point!</i>
          </div>
        </div>
      </section>

      <div className="mt-20">Whatt</div>
    </div>
  )
}
