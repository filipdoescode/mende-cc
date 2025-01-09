import { Text } from "./ui/text"

export function SimpleFooter() {
  return (
    <footer className="container border-t border-[#959390] py-12 text-center">
      <Text className="!text-base">
        {" "}
        © {new Date().getFullYear()} | Mendflow Ltd.
      </Text>
    </footer>
  )
}
