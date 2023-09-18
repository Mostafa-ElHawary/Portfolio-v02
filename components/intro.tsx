"use client";
import React from "react";
import Image from "next/image";
import portfolio from "@/public/portfolio.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portfolio}
              alt="Mostafa El Hawary"
              width="192"
              height="192"
              quality="70"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
            <motion.span
              className="absolute bottom-1 right-1 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
