import React from "react";
import type { AppProps } from "next/app";
import ClickFluencer from "../components/ClickFluencer/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickFluencer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
