import React from "react";

import { AiFillLike } from "react-icons/ai";
import { IoMdSave } from "react-icons/io";
import Img from "../layouts/UIhelpers/Img";
import Grid from "../layouts/UIhelpers/Grid";
const SingleBlog = () => {
  return (
    <article className="col-span-3">
      <Img
        src={"https://crowdbotics.ghost.io/content/images/2019/05/MERN.png"}
      />
      <h2 className="text-3xl my-5">
        MERN is the new trend for web development!
      </h2>
      <Grid className={"grid-flow-col auto-cols-min gap-x-5 my-3"}>
        <Grid className="w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer bg-[#404764]">
          <AiFillLike />
          like
        </Grid>
        <Grid className="w-20 px-3 rounded-lg text-white  items-center grid-flow-col cursor-pointer bg-[#404764]">
          <IoMdSave />
          save
        </Grid>
      </Grid>
      <p className="text-base text-gray-500 ">
        A MERN stack comprises a collection of four frameworks (MongoDB,
        ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript
        solutions for rapid, scalable, and secure applications. Each framework
        serves a different purpose in creating successful web applications. It
        is an excellent choice for companies looking to develop high-quality
        responsive applications quickly using just one language. Ready to create
        a new web application? Yes, then refer to the following articles for a
        step-by-step guide to configure the frameworks on your local machine.
      </p>
      <Grid className={"grid-flow-col auto-cols-min gap-5 my-3"}>
        <span>#javascript</span>
        <span>#javascript</span>
        <span>#javascript</span>
      </Grid>
    </article>
  );
};

export default SingleBlog;
