import React, { useEffect } from "react";
import RelatedBlogs from "./RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlog } from "../../feature/relatedBlogs/relatedBlogsSlice";
import Loading from "../layouts/UIhelpers/Loading";
import Error from "../layouts/UIhelpers/Error";
import NotFound from "../layouts/UIhelpers/NotFound";

const RelatedBlogsContainer = ({ tags, currentBlogId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedBlog({ tags, currentBlogId }));
  }, [dispatch]);

  const { relatedBlog, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlog
  );
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && relatedBlog.length === 0) {
    content = <NotFound message={"no blogs found"} />;
  }
  if (!isLoading && !isError && relatedBlog.length > 0) {
    content = relatedBlog.map((blog, index) => (
      <RelatedBlogs
        key={index}
        src={blog.image}
        alt={blog.title}
        title={blog.title}
        createdAt={blog.createdAt}
        link={blog.id}
        likes={blog.likes}
      />
    ));
  }
  return <div className="flex flex-col gap-y-5">{content}</div>;
};

export default RelatedBlogsContainer;
