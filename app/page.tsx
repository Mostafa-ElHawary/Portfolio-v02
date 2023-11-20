import Image from "next/image";
import Intro from "@/components/intro";
import Line from "@/components/line";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ProblemSolving from "@/components/problemSolving";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="px-4">
      <Intro />
      <Line />
      <Experience />
      <Line />
      <About />
      <Line />
      <Projects />
      <Line />
      <Skills />
      <Line />
      <ProblemSolving />
      <Line />
      <Contact/>

    </main>
  );
}
