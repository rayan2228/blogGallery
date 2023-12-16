import React from "react";
import { Link } from "react-router-dom";
import Img from "../layouts/UIhelpers/Img";

const Blog = ({ link, src, alt, title, description }) => {
  return (
    <div className="mb-5 bg-white border border-gray-200 rounded-lg shadow-md ">
      <Link to={`blog/${link}`}>
        <Img
          className="rounded-t-lg"
          src={src}
          alt={alt}
          imgClassName={"w-full object-cover rounded-t-lg h-[160px]"}
        />
      </Link>
      <div className="p-5">
        <Link to={`blog/${link}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link
          className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-950 focus:ring-4 focus:ring-blue-300"
          to={`blog/${link}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Blog;
