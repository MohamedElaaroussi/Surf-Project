// src/App.js
import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import RoutesConfig from "./components/Routes/RoutesConfig";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RouterProvider router={RoutesConfig} />
    </div>
  );
};

export default App;
