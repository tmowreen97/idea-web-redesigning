import Image from 'next/image'
import Hero from '@/components/Hero'
import { Urbanist } from 'next/font/google'
import About from '@/components/About'
import ProjectHome from '@/components/ProjectHome'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist' 
})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${urbanist.variable} font-sans tracking-wider`}>
      <Hero heading='We Empower Ideas'/>
      <About/>
      <ProjectHome/>
    </main>
  )
}
