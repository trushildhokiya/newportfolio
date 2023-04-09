import React, { useState, useEffect } from "react";
import Home from "./container/Pages/Home";
import PreLoader from "./components/PreLoader";

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ?

        <PreLoader />

        : <Home />}
    </div>
  );
}

export default App;
