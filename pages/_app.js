import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
// import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import { Urbanist } from 'next/font/google'


const urbanist = Urbanist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <main className={urbanist.className}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    
  )
}


