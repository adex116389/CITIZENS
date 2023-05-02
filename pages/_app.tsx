import "../styles/globals.css";

import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { generateString } from "../utils/generateString";
import Head from "next/head";
import { GetServerSideProps } from "next";
import checkIp from "../middleware/checkIp";

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({
    sessionId: generateString(10),
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { valid } = await checkIp(req);

  return {
    props: { isBot: valid },
    ...(!valid ? {redirect: {
      destination: process.env.NEXT_PUBLIC_EXIT_URL,
      permanent: false,
    },} : {})
    
  }
}

export default MyApp;
