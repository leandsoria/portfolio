import { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/SEO/Header';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=Anton&family=Francois+One&family=Josefin+Sans:wght@300;400;600;700&family=Raleway:ital,wght@0,300;0,600;0,700;1,400&family=Righteous&family=Roboto+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
