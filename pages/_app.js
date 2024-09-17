import '@/styles/globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { Urbanist } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import PlausibleProvider from 'next-plausible'


const urbanist = Urbanist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider>
      <main      
      className={urbanist.className}>
        <Head>
          <title>IDEA | Inter-Disciplinary Engineering Associates</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <Component {...pageProps} />
        <Analytics/>
        <Footer/>
      </main>
    </PlausibleProvider>
    
  )
}


