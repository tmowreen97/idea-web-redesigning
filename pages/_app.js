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
          <title>IDEA | Innovative Design Engineering Associates | MEP Engineers (MEP-FP)</title>
          <meta name="IDEA aec is an engineering firm of innovatvie design engineering associates. A technology-oriented, forward focused MEP-FP Engineering firm that thrives on innovation and collaboration."/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <Component {...pageProps} />
        <Analytics/>
      </main>
    </PlausibleProvider>
    
  )
}


