import React, { useEffect } from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../feature/blogs/blogsSlice";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  let content;
  if (isLoading) {
    content = "loading";
  }
  if (!isLoading && isError) {
    content = `<p>${error}</p>`;
  }
  if (!isLoading && !isError && blogs?.length === 0) {
    content = "<h2>no blogs found</h2>";
  }
  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog, index) => (
      <Blog
        key={index}
        link={blog.id}
        title={blog.title}
        description={blog.description.slice(0, 100) + "..."}
        src={blog.image}
        alt={blog.title}
        createdAt={blog.createdAt}
      />
    ));
  }

  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-6 "}>{content}</Grid>
    </Container>
  );
};

export default BlogsContainer;
