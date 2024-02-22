import Head from "next/head";

import Header from "@scenes/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitovi Header</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://bitovi.com/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
