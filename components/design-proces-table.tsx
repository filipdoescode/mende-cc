"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Icons } from "./icons"

const TABLE_ROWS = [
  {
    title: "Connecting and Understanding",
    start: 10,
    width: 175,
  },
  {
    title: "Gather, Analyze, Visualize",
    start: 10,
    width: "40%",
  },
  {
    title: "The Creative Aspect",
    start: "30%",
    width: 503,
  },
  {
    title: "Deliver",
    start: "94%",
    width: 52,
  },
]

export function DesignProcessTable() {
  return (
    <Table className="border-separate border-spacing-y-6">
      <TableHeader className="border-none">
        <TableRow className="border-none font-artbrush text-2xl text-primary">
          <TableHead className="w-fit min-w-[300px] p-0 uppercase text-primary">
            The Design Process
          </TableHead>

          <TableHead className="flex items-center justify-between p-2 text-primary">
            <span>start</span>
            <span>end</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TABLE_ROWS.map((row, index) => (
          <TableRow
            key={row.title + index}
            className="border-none pb-5 font-artbrush text-2xl text-primary"
          >
            <TableCell className="w-fit p-0 font-medium">{row.title}</TableCell>

            <TableCell className="w-full p-0">
              <div className="relative">
                <Icons.brushProgressBorder
                  width="100%"
                  height="100%"
                  className="relative bottom-0 left-0 right-0 top-0 z-10 w-full"
                />

                <motion.div
                  className={cn("absolute bottom-0 top-0 bg-[#57967B]")}
                  initial={{
                    left: row.start,
                  }}
                  animate={{
                    width: row.width,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
