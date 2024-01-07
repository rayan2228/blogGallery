import React, { useEffect } from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../feature/blogs/blogsSlice";
import Loading from "../layouts/UIhelpers/Loading";
import Error from "../layouts/UIhelpers/Error";
import NotFound from "../layouts/UIhelpers/NotFound";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { filter, sort, search } = useSelector((state) => state.filterBlog);
  useEffect(() => {
    dispatch(fetchBlogs({ filter, sort, search }));
  }, [dispatch, filter, sort, search]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && blogs?.length === 0) {
    content = <NotFound message={"no blogs found"} />;
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
