import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout.jsx";
// import { Home } from "./components/index.js";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
