import { SimpleFooter } from "@/components/simple-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      {children}

      <SimpleFooter />
    </>
  )
}
