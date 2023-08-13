import Image from 'next/image'
import Hero from '@/components/Hero'
import { Urbanist } from 'next/font/google'
import About from '@/components/About'
import ProjectHome from '@/components/ProjectHome'
import Navbar from '@/components/Navbar'
import { useState } from 'react';

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist' 
})

export default function Home() {
  const [lightLogo, setLightLogo] = useState(false)
  return (
    <main className={`flex min-h-screen min-w-screen flex-col items-center justify-between ${urbanist.variable} font-sans tracking-wider`}>
      <Navbar setLightLogo={setLightLogo} lightLogo={lightLogo} />
      <Hero heading='We Empower Ideas'/>
      <About/>
      <ProjectHome/>
    </main>
  )
}
