import React from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import Blog from "./Blog";

const BlogsContainer = () => {
  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-6"}>
        <Blog />
      </Grid>
    </Container>
  );
};

export default BlogsContainer;
