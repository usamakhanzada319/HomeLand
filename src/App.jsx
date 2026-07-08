import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout.jsx";
// import { Home } from "./components/index.js";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import Buy from "./Pages/Buy.jsx";
import Rent from "./Pages/Rent.jsx";
import Properties from "./Pages/Properties.jsx";
import About from "./Pages/About.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

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
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="Properties" element={<Properties />} />
        <Route path="blogpage" element={<BlogPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
