import React from "react";

type SectionHeading = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeading) {
  return (
    <h2 className="elementCenter  font-medium capitalize mb-8 text-center  textResizeP1 font-mono ">
      {children}
    </h2>
  );
}
