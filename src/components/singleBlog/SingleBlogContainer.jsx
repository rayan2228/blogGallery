import React, { useEffect } from "react";
import Container from "../layouts/UIhelpers/Container";
import Grid from "../layouts/UIhelpers/Grid";
import SingleBlog from "./SingleBlog";
import RelatedBlogsContainer from "../relatedBlogs.jsx/RelatedBlogsContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBlog } from "../../feature/singleBlog/singleBlogSlice";
import { useParams } from "react-router-dom";
import Loading from "../layouts/UIhelpers/Loading";
import Error from "../layouts/UIhelpers/Error";
import NotFound from "../layouts/UIhelpers/NotFound";

const SingleBlogContainer = () => {
  const dispatch = useDispatch();
  const { blogid: blogId } = useParams();
  useEffect(() => {
    dispatch(fetchSingleBlog(blogId));
  }, [dispatch]);

  const { singleBlog, isLoading, isError, error } = useSelector(
    (state) => state.singleBlog
  );
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && Object.keys(singleBlog).length === 0) {
    content = <NotFound message={"no blog found"} />;
  }
  if (!isLoading && !isError && Object.keys(singleBlog).length > 0) {
    content = (
      <>
        <SingleBlog
          id={singleBlog.id}
          src={singleBlog.image}
          alt={singleBlog.title}
          title={singleBlog.title}
          description={singleBlog.description}
          tags={singleBlog.tags}
          likes={singleBlog.likes}
          createdAt={singleBlog.createdAt}
          isSaved={singleBlog.isSaved}
        />
        <RelatedBlogsContainer
          tags={singleBlog.tags}
          currentBlogId={singleBlog.id}
        />
      </>
    );
  }
  return (
    <Container>
      <Grid className={"grid-cols-4 gap-x-5 mt-5"}>{content}</Grid>
    </Container>
  );
};

export default SingleBlogContainer;
