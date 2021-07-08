import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {     
      h1: {
        fontSize:"24px",
        fontWeight:"bold",
        margin:" 0"

      },
      h2: {
        fontSize:"20px",
        fontWeight:"bold",
        margin:"8px 0"
      },
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
