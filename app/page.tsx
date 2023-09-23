import Image from 'next/image'
import Intro from '@/components/intro'
import Line from '@/components/line'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
     <Intro/>
     <Line/>
     <About/>
     <Projects/>
     <Skills/>
    </main>
  )
}
