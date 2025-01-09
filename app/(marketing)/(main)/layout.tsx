import { Footer } from "@/components/footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      {children}

      <Footer />
    </>
  )
}
