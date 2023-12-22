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
  const { filterBlog, FilterIsLoading, FilterIsError, FilterError } =
    useSelector((state) => state.filterBlog);
  let content;
  if (isLoading || FilterIsLoading) {
    content = "loading";
  }
  if ((!isLoading && isError) || (!FilterIsLoading && FilterIsError)) {
    content = `<p>${error || FilterIsError}</p>`;
  }
  if (
    (!isLoading && !isError && blogs?.length === 0) ||
    (!FilterIsLoading && !FilterIsError && filterBlog?.length === 0)
  ) {
    content = `<h2>no ${
      (blogs?.length === 0 && "blogs") ||
      (filterBlog?.length === 0 && "saved blogs")
    } found</h2>`;
  }
  if (
    (!isLoading && !isError && blogs?.length > 0) ||
    (!FilterIsLoading && !FilterIsError && filterBlog?.length > 0)
  ) {
    content =
      filterBlog?.length !== 0
        ? filterBlog.map((filterBlog, index) => (
            <Blog
              key={index}
              link={filterBlog.id}
              title={filterBlog.title}
              description={filterBlog.description.slice(0, 100) + "..."}
              src={filterBlog.image}
              alt={filterBlog.title}
              createdAt={filterBlog.createdAt}
            />
          ))
        : blogs.map((blog, index) => (
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
