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
        <title>IDEA AEC | WE EMPOWER IDEAS</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </main>
    
  )
}


