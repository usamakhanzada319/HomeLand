import React from "react";
import {
  Hero,
  SearchForm,
  // PropertiesData,
  Choose,
  Blog,
  Agents,
  PropertyGrid,
} from "../components/index.js";
import { allProperties } from "../../Data/properties.js";
function Home() {
  return (
    <>
      <Hero />
      <SearchForm />
      <PropertyGrid
        properties={allProperties}
        title="Our Properties"
        subtitle="Find your dream property"
        showFilter={true}
        showSort={true}
      />
      <Choose />
      <Blog />
      <Agents />
    </>
  );
}

export default Home;
