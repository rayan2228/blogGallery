import React from "react";
import Img from "../layouts/UIhelpers/Img";
import { AiFillLike } from "react-icons/ai";
import Grid from "../layouts/UIhelpers/Grid";
import { IoTimeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RelatedBlogs = ({ link, src, createdAt, title, likes, alt }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/blog/1`);
  };
  return (
    <div onClick={handleNavigate}>
      <Img src={src} alt={alt} createdAt={createdAt} />
      <div>
        <h2 className="text-lg">{title}</h2>
        <Grid className={"grid-flow-col auto-cols-max items-center gap-3 mt-2"}>
          <AiFillLike />
          <p>{likes}</p>
          <IoTimeSharp />
          <small>{createdAt}</small>
        </Grid>
      </div>
    </div>
  );
};

export default RelatedBlogs;
