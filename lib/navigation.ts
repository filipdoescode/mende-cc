import { commonContent } from "@/content/common"

import { ROUTES } from "@/lib/routes"

export const NAV_ITEMS_1 = [
  {
    href: ROUTES.theProcess,
    label: commonContent.navigation.process,
  },
  {
    href: ROUTES.theResults,
    label: commonContent.navigation.result,
  },
]
export const NAV_ITEMS_2 = [
  {
    href: ROUTES.myStory,
    label: commonContent.navigation.myStory,
  },
  {
    href: ROUTES.contact,
    label: commonContent.navigation.letsConnect,
  },
]

export const NAVIGATION = [...NAV_ITEMS_1, ...NAV_ITEMS_2]
