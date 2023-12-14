import React from "react";
import Img from "../layouts/UIhelpers/Img";
import { AiFillLike } from "react-icons/ai";
import Grid from "../layouts/UIhelpers/Grid";
import { IoTimeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const RelatedBlogs = () => {
  return (
    <div className="gap-y-5 flex flex-col">
      <Link to={"/blog"}>
        <Img
          src={"https://crowdbotics.ghost.io/content/images/2019/05/MERN.png"}
        />
        <div>
          <h2 className="text-lg">
            MERN is the new trend for web development!
          </h2>
          <Grid
            className={"grid-flow-col auto-cols-max items-center gap-3 mt-2"}
          >
            <AiFillLike />
            <p>25</p>
            <IoTimeSharp />
            <small>2020-07-15</small>
          </Grid>
        </div>
      </Link>
      <Link to={"/blog"}>
        <Img
          src={"https://crowdbotics.ghost.io/content/images/2019/05/MERN.png"}
        />
        <div>
          <h2 className="text-lg">
            MERN is the new trend for web development!
          </h2>
          <Grid
            className={"grid-flow-col auto-cols-max items-center gap-3 mt-2"}
          >
            <AiFillLike />
            <p>25</p>
            <IoTimeSharp />
            <small>2020-07-15</small>
          </Grid>
        </div>
      </Link>
    </div>
  );
};

export default RelatedBlogs;
