import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link className='width-5 height-5'rel="icon" href="/assets/icon.jpg"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
