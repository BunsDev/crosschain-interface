import Head from 'next/head'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { LoadingIndicator } from '../components/LoadingIndicator';
import Script from 'next/script';

const manrope = Manrope({ subsets: ['latin'] })

export const LiFiWidgetNext = dynamic(
  () => import('../components/Widget').then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  },
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SoulSwap</title>
        <meta name="description" content="A very simple but powerful crosschain swap interface, powered by LI.FI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="defi, swap, crypto, lifi, li.fi, exchange, metamask" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoulSwap Crosschain" />
        <meta name="twitter:image" content="https://cross.soulswap.finance/og.png" />
        <meta name="twitter:domain" content="cross.soulswap.finance" />
        <meta name="twitter:site" content="@SoulSwapFinance" />
        <meta name="twitter:creator" content="@SoulSwapFinance" />
        <meta
          name="twitter:description"
          content="A very simple but powerful crosschain swap interface, powered by LI.FI."
        />

        <meta property="og:title" content="SoulSwap Crosschain" />
        <meta property="og:description" content="A very simple but powerful crosschain swap interface, powered by LI.FI." />
        <meta property="og:image" content="https://cross.soulswap.finance/og.png" />
        <meta property="og:url" content="https://cross.soulswap.finance" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          {/* <h1 className={styles.title}>Soul xSwap</h1> */}
          {/* <p className={styles.titleSub}>
            Powered by Li.Fi<br />
          </p> */}
          {/* <p className={styles.sub}>
            No added fees - <a href="https://github.com/SoulSwapFinance/crosschain-interface" target="_blank" rel="noopener noreferrer">Open Source</a>
          </p> */}
          <LiFiWidgetNext />
        </div>
      </main>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        strategy="afterInteractive"
        id="google-tag1"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CYE6KFRLTH`}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag2"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYE6KFRLTH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
    </>
  );
};

export default Home;