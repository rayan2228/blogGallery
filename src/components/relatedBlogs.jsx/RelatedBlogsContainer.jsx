import React, { useEffect } from "react";
import RelatedBlogs from "./RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlog } from "../../feature/relatedBlogs/relatedBlogsSlice";

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
    content = "loading";
  }
  if (!isLoading && isError) {
    content = `<p>${error}</p>`;
  }
  if (!isLoading && !isError && relatedBlog.length === 0) {
    content = "<h2>no blogs found</h2>";
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
