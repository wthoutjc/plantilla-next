import "../styles/styles.scss";
import type { AppProps } from "next/app";

// Next Auth
import { SessionProvider } from "next-auth/react";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../themes";

// Redux
import { Provider } from "react-redux";
import { store } from "../store";

// Notifications

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
