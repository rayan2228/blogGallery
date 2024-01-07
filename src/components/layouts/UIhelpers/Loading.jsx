import React from "react";
import Grid from "./Grid";

const Loading = () => {
  return (
    <Grid className={"justify-center items-center col-span-full"}>
      <Grid className={"grid-flow-col gap-x-4 items-center auto-cols-min"}>
        <span className="w-10 h-10 border-4 border-red-600 rounded-full animate-spin border-t-transparent border-b-transparent"></span>
        <span className="font-bold ">Loading</span>
      </Grid>
    </Grid>
  );
};

export default Loading;
