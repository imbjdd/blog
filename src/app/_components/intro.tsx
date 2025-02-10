'use client'

import Image from "next/image"
import { motion } from "motion/react"

export function Intro() {
  return (
    <section className="flex-col flex justify-center mb-4 md:my-16 md:mb-12">
      <div className="flex flex-col gap-8 md:flex-row md:py-20">
        <h1 className="text-left h-fit md:w-7/12 mt-4 md:text-7xl hidden md:block">
          Fullstack Developer<br />& Mathematics Student
        </h1>
        <h1 className="text-left h-fit md:w-7/12 mt-4 text-3xl block md:hidden">
          Fullstack Developer<br />& Mathematics Student
        </h1>
        <div className="flex justify-center md:justify-end md:items-end grow">
          <Image className="rotate-[0.1rad]" src={'/moi.png'} width={150} height={150} alt='me'/>
        </div>
      </div>
    </section>
  );
}
