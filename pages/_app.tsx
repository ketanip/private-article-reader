import '../styles/normalize.css'
import '../styles/skeleton.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Component {...pageProps} />
  );
  
};

export default MyApp;
