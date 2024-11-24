interface HamburgerIconProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HamburgerIcon({
  open: isOpen,
  onOpenChange,
}: HamburgerIconProps) {
  return (
    <div
      className="relative h-[60px] w-[60px] cursor-pointer"
      onClick={() => onOpenChange(!isOpen)}
    >
      {/* Left icon */}
      <div
        className={`absolute left-0 top-[30px] h-[8px] w-[30px] transition-all duration-500 before:absolute before:-top-[20px] before:h-[8px] before:w-[30px] before:bg-gray-900 before:transition-all before:duration-500 before:content-[''] after:absolute after:top-[20px] after:h-[8px] after:w-[30px] after:bg-gray-900 after:transition-all after:duration-500 after:content-[''] ${isOpen ? "bg-transparent" : "bg-gray-900"} ${isOpen ? "before:translate-x-1 before:translate-y-1 before:rotate-45 before:scale-x-[1.4] before:transform" : ""} ${isOpen ? "after:-translate-y-1 after:translate-x-1 after:-rotate-45 after:scale-x-[1.4] after:transform" : ""} `}
      />

      {/* Right icon */}
      <div
        className={`absolute left-[30px] top-[30px] h-[8px] w-[30px] transition-all duration-500 before:absolute before:-top-[20px] before:h-[8px] before:w-[30px] before:bg-gray-900 before:transition-all before:duration-500 before:content-[''] after:absolute after:top-[20px] after:h-[8px] after:w-[30px] after:bg-gray-900 after:transition-all after:duration-500 after:content-[''] ${isOpen ? "bg-transparent" : "bg-gray-900"} ${isOpen ? "before:-translate-x-1 before:translate-y-1 before:-rotate-45 before:scale-x-[1.4] before:transform" : ""} ${isOpen ? "after:-translate-x-1 after:-translate-y-1 after:rotate-45 after:scale-x-[1.4] after:transform" : ""} `}
      />
    </div>
  )
}
