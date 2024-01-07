import React from "react";
import Grid from "./Grid";

const Error = ({ error }) => {
  return (
    <Grid
      className={
        "justify-center items-center col-span-full bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      }
    >
      <p className="font-bold">Be Warned</p>
      <p>{error}</p>
    </Grid>
  );
};

export default Error;
