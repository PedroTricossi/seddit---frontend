import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import React from "react";
import { createClient, Provider } from "urql";

const client = createClient({ url: "http://localhost:4000/graphql" });

import theme from "../theme";

// eslint-disable-next-line require-jsdoc, @typescript-eslint/explicit-module-boundary-types, react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
