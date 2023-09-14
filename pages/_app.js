import '@/styles/globals.css'
import Head from 'next/head';
import Footer from '@/components/Footer'
import { Urbanist } from 'next/font/google'


const urbanist = Urbanist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <main 
    
    className={urbanist.className}>
      <Head>
        <title>IDEA | Inter-Disciplinary Engineering Associates</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </main>
    
  )
}


