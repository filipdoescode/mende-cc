import { FieldValues } from "react-hook-form"

import { Text } from "@/components/ui/text"

interface QuickRecapProps {
  values: FieldValues
}

export function QuickRecapStep({ values }: QuickRecapProps) {
  return (
    <ul>
      <li>
        <Text>
          Name: <strong>{values.fullName}</strong>
        </Text>
      </li>
      <li>
        <Text>
          Phone: <strong>{values.phone}</strong>
        </Text>
      </li>
      <li>
        <Text>
          Email: <strong>{values.email}</strong>
        </Text>
      </li>
      <li>
        <Text>
          Project Description: <strong>{values.purpose}</strong>
        </Text>
      </li>
      <li>
        <Text>
          Budget: <strong>{values.budget}</strong>
        </Text>
      </li>
      <li>
        <Text>
          Timeframe: <strong>{values.timeframe}</strong>
        </Text>
      </li>
    </ul>
  )
}
