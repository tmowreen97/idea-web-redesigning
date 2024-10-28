import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link className='width-5 height-5'rel="icon" href="/assets/icon.jpg"  />
        <meta name="IDEA aec is an engineering firm of inter-disciplinary engineering associates. A technology-oriented, forward focused MEP-FP Engineering firm that thrives on innovation and collaboration."/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
