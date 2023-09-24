import Image from "next/image";
import Intro from "@/components/intro";
import Line from "@/components/line";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Line />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Contact/>
    </main>
  );
}
