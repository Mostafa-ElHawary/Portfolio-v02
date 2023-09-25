"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const {theme , toggleTheme} = useTheme()

  return (
    <button
      className="flex justify-center items-center fixed bottom-5 right-5 h-[3rem] w-[3rem] bg-white bg-opacity-80 backdrop-blur-[0.1rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
