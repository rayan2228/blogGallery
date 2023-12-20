import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { IoMdSave } from "react-icons/io";
import Img from "../layouts/UIhelpers/Img";
import Grid from "../layouts/UIhelpers/Grid";
import { axiosInstance } from "../../utils/config/axiosConfig";
const SingleBlog = ({
  src,
  alt,
  title,
  tags,
  description,
  likes,
  createdAt,
  id,
  isSaved,
}) => {
  const [isSavedState, setIsSavedState] = useState(isSaved);
  const [isLikedState, setIsLikedState] = useState(false);
  const [likesState, setLikesState] = useState(likes);
  const handleSaved = async (isSaved) => {
    setIsSavedState(!isSavedState);
    await axiosInstance.patch(`/blogs/${id}`, {
      isSaved: !isSaved,
    });
  };
  const handleLike = async (likes) => {
    setIsLikedState(true);
    setLikesState(likes + 1);
    await axiosInstance.patch(`/blogs/${id}`, {
      likes: likes + 1,
    });
  };
  const handleLikeUndo = async (likes) => {
    setIsLikedState(false);
    setLikesState(likes - 1);
    await axiosInstance.patch(`/blogs/${id}`, {
      likes: likes - 1,
    });
  };
  return (
    <article className="col-span-3">
      <Img src={src} alt={alt} createdAt={createdAt} />
      <h2 className="my-5 text-3xl">{title}</h2>
      <Grid className={"grid-flow-col auto-cols-min gap-x-5 my-3"}>
        <div
          className={`grid w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer ${
            isLikedState ? "bg-green-950" : "bg-[#404764]"
          }`}
          onClick={() =>
            isLikedState ? handleLikeUndo(likesState) : handleLike(likesState)
          }
        >
          <AiFillLike />
          {likesState}
        </div>
        <div
          className={`grid w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer ${
            isSavedState ? "bg-green-950" : "bg-[#404764]"
          }`}
          onClick={() => handleSaved(isSavedState)}
        >
          <IoMdSave />
          save
        </div>
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
