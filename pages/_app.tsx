import "../styles/globals.css";
import "animate.css/animate.min.css";

import AppContext from "../components/AppContextFolder/AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState({});
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
