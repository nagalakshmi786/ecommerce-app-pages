// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add any custom links, meta tags, or stylesheets here */}
      </Head>
      <body>
        <Main />  {/* The page content will render here */}
        <NextScript />  {/* This is where Next.js scripts will go */}
      </body>
    </Html>
  );
}
