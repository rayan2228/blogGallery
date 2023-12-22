import React from "react";
import BlogsContainer from "../components/blogs/BlogsContainer";
import FilterContainer from "../components/filter/FilterContainer";

const Home = () => {
  return (
    <>
      <FilterContainer />
      <BlogsContainer />
    </>
  );
};

export default Home;
