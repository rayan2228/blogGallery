import React, { useEffect } from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import SingleBlog from "./SingleBlog";
import RelatedBlogsContainer from "../relatedBlogs.jsx/RelatedBlogsContainer";
import { useDispatch, useSelector } from "react-redux";
import { singleBlogApi } from "../../feature/singleBlog/singleBlogApi";

const SingleBlogContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(singleBlogApi());
  }, [dispatch]);

  const { singleBlog, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  console.log(singleBlog);
  // let content;
  // if (isLoading) {
  //   content = "loading";
  // }
  // if (!isLoading && isError) {
  //   content = `<p>${error}</p>`;
  // }
  // if (!isLoading && !isError && blogs?.length === 0) {
  //   content = "<h2>no blogs found</h2>";
  // }
  // if (!isLoading && !isError && blogs?.length > 0) {
  //   content = <SingleBlog />;
  // }
  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-5 mt-5"}>
        {/* {content} */}
        <RelatedBlogsContainer />
      </Grid>
    </Container>
  );
};

export default SingleBlogContainer;
