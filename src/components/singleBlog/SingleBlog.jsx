import React from "react";

import { AiFillLike } from "react-icons/ai";
import { IoMdSave } from "react-icons/io";
import Img from "../layouts/UIhelpers/Img";
import Grid from "../layouts/UIhelpers/Grid";
const SingleBlog = ({
  src,
  alt,
  title,
  tags,
  description,
  likes,
  createdAt,
}) => {
  return (
    <article className="col-span-3">
      <Img src={src} alt={alt} createdAt={createdAt} />
      <h2 className="my-5 text-3xl">{title}</h2>
      <Grid className={"grid-flow-col auto-cols-min gap-x-5 my-3"}>
        <Grid className="w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer bg-[#404764]">
          <AiFillLike />
          {likes}
        </Grid>
        <Grid className="w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer bg-[#404764]">
          <IoMdSave />
          save
        </Grid>
      </Grid>
      <p className="text-base text-gray-500 ">{description}</p>
      <Grid className={"grid-flow-col auto-cols-min gap-5 my-3"}>
        {tags?.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </Grid>
    </article>
  );
};

export default SingleBlog;
