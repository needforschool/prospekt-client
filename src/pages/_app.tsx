import { AppProps } from "next/app";

import GlobalStyle from "@components/Layout/GlobalStyle";
import Head from "@components/Head";

import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head
        description={
          "Next Boilerplate is a boilerplate of next and styled components, use this template to start your app."
        }
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
