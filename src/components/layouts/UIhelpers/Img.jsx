import React from "react";
import Grid from "./Grid";
import { IoTimeSharp } from "react-icons/io5";
const Img = ({ src, alt, className, imgClassName, createdAt }) => {
  return (
    <div className={`relative ${className}`}>
      <picture>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full ${imgClassName}`}
        />
      </picture>
      {alt !== "logo" && (
        <Grid className=" py-1 px-2 rounded-lg text-white  items-center grid-flow-col cursor-pointer bg-[#404764] absolute bottom-2 left-2 gap-2">
          <IoTimeSharp />
          <small>{createdAt}</small>
        </Grid>
      )}
    </div>
  );
};

export default Img;
