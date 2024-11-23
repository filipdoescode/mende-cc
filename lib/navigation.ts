import { commonContent } from "@/content/common"

export const NAV_ITEMS_1 = [
  {
    href: "/",
    label: commonContent.navigation.process,
  },
  {
    href: "/",
    label: commonContent.navigation.result,
  },
]
export const NAV_ITEMS_2 = [
  {
    href: "/",
    label: commonContent.navigation.myStory,
  },
  {
    href: "/",
    label: commonContent.navigation.letsConnect,
  },
]

export const NAVIGATION = [...NAV_ITEMS_1, ...NAV_ITEMS_2]
