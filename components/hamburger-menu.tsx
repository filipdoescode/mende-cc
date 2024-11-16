"use client"

import { useState } from "react"

export function HamburgerIcon() {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="relative block lg:hidden">
      {/* Hidden checkbox for controlling the menu state */}
      <input
        type="checkbox"
        id="menuCheckbox"
        className="absolute left-[-5px] top-[-7px] z-20 h-8 w-10 cursor-pointer opacity-0"
        checked={isOpen}
        onChange={toggleMenu}
      />
      {/* Hamburger icon (3 bars) */}
      <div
        onClick={toggleMenu}
        className={`flex h-8 w-8 cursor-pointer flex-col items-center justify-between space-y-2`}
      >
        <span
          className={`block h-1 w-8 transform rounded-sm transition-all duration-500 ${isOpen ? "translate-x-1 rotate-45 bg-black" : "bg-gray-300"}`}
        ></span>
        <span
          className={`block h-1 w-8 rounded-sm transition-all duration-500 ${isOpen ? "opacity-0" : "bg-gray-300"}`}
        ></span>
        <span
          className={`block h-1 w-8 transform rounded-sm transition-all duration-500 ${isOpen ? "translate-x-1 rotate-[-45deg] bg-black" : "bg-gray-300"}`}
        ></span>
      </div>
    </div>
  )
}
