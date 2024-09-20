import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import LoadingScreen from "./Layout/UI/WelcomeScreen/WelcomeScreen";
function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return loader ? <Layout /> : <LoadingScreen />;
}

export default App;
