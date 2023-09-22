"use client";
import React, { useContext, useState, createContext } from "react";
import { links } from "@/lib/data";
type linksOfSectionsType = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: linksOfSectionsType;
  setActiveSection: React.Dispatch<React.SetStateAction<linksOfSectionsType>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] =
    useState<linksOfSectionsType>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("No Context found");
  }
  return context;
}
