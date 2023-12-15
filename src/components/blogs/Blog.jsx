import React from "react";
import { Link } from "react-router-dom";
import Img from "../layouts/UIhelpers/Img";

const Blog = ({ link }) => {
  return (
    <>
      <div>
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <Link to={"blog/1"}>
            <Img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
              imgClassName={"rounded-t-lg"}
            />
          </Link>
          <div className="p-5">
            <Link to={link}>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              className="text-white bg-green-950  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              to={link}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
