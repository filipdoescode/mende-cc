import { MMLink } from "./mm-link"
import { Heading } from "./ui/heading"

export function QuickQuestion() {
  return (
    <div className="space-y-[30px]">
      <Heading className="font-artbrush !text-base font-normal lg:!text-[32px]">
        Got a quick question?
      </Heading>

      <ul className="flex flex-col gap-5 lg:gap-8">
        <li>
          <MMLink
            href="https://linkedin.com/in/mitreskimende"
            variant="secondary"
            // @ts-expect-error - todo: fix
            target="_blank"
            className="!text-sm lg:!text-2xl"
          >
            LinkedIn DM
          </MMLink>
        </li>

        <li>
          <MMLink
            href="mailto:mitreskimende@gmail.com"
            variant="secondary"
            className="!text-sm lg:!text-2xl"
          >
            Direct Email
          </MMLink>
        </li>
      </ul>
    </div>
  )
}
