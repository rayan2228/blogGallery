import React, { useEffect } from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import Blog from "./Blog";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../feature/blogs/blogsSlice";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-6"}>
        <Blog />
      </Grid>
    </Container>
  );
};

export default BlogsContainer;
