import Head from "next/head";

import "../styles/globals.css";
import "../styles/partials/animations.css";
import "../styles/partials/forms.css";
import "../styles/partials/buttons.css";
import "../styles/partials/cards.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JobsCalc</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
