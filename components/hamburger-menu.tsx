"use client"

import Link from "next/link"

import { NAVIGATION } from "@/lib/navigation"

export function HamburgerMenu() {
  return (
    <div className="relative z-50 block md:hidden">
      <input type="checkbox" className="hidden" id="navi-toggle" />

      <label
        htmlFor="navi-toggle"
        className="fixed right-8 top-8 z-20 h-10 w-10 cursor-pointer select-none rounded-full text-center"
      >
        <span className="relative inline-block h-[2px] w-12 bg-[#333]">
          <span className="absolute left-0 top-[-0.8rem] h-[2px] w-12 bg-[#333] transition-all duration-300"></span>
          <span className="absolute left-0 top-[0.8rem] h-[2px] w-12 bg-[#333] transition-all duration-300"></span>
        </span>
      </label>

      <nav
        className="z-15 duration-800 ease-[cubic-bezier(0.83,0,0.17,1)] fixed left-[-30rem] top-0 w-0 bg-black text-white opacity-0 transition-all"
        aria-hidden="true"
      >
        <ul className="relative left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform list-none text-center">
          <label htmlFor="navi-toggle" className="container flex flex-col">
            {NAVIGATION.map((item, index) => (
              <li
                key={item.label + index}
                className="duration-400 font-inter inline-block border-b border-white bg-gradient-to-r from-transparent px-8 py-4 text-3xl text-white no-underline transition-all"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </label>
        </ul>
      </nav>

      <style jsx>{`
        #navi-toggle:checked ~ nav {
          left: 0;
          opacity: 1;
          width: 100vw;
          height: 100vh;
        }

        #navi-toggle:checked ~ div {
          transform: scale(0.8);
        }
      `}</style>
    </div>
  )
}
