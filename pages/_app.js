import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Provider } from "react-redux";
import store from "../redux/app/store";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
