import React from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import SingleBlog from "./SingleBlog";
import RelatedBlogsContainer from "../relatedBlogs.jsx/RelatedBlogsContainer";

const SingleBlogContainer = () => {
  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-5 mt-5"}>
        <SingleBlog />
        <RelatedBlogsContainer />
      </Grid>
    </Container>
  );
};

export default SingleBlogContainer;
