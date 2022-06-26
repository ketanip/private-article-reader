import type { AppProps } from "next/app";
import "../styles/global.css";

function PrivateArticleReaderApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default PrivateArticleReaderApp;
