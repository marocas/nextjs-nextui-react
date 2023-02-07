import { NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from '@react-aria/ssr';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  );
}

export default MyApp;
