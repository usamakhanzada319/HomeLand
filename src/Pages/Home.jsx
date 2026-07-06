import React from "react";
import {
  Hero,
  SearchForm,
  PropertiesData,
  Choose,
  Blog,
  Agents,
} from "../components/index.js";

function Home() {
  return (
    <>
      <Hero />
      <SearchForm />
      <PropertiesData />
      <Choose />
      <Blog />
      <Agents />
    </>
  );
}

export default Home;
