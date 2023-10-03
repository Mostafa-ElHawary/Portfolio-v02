"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex dark:text-[#64ffda] justify-center items-center fixed bottom-5 right-5 h-[3rem] w-[3rem]     hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
