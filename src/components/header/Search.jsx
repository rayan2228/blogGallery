import React from "react";
import Grid from "../layouts/UIhelpers/Grid";

const Search = () => {
  return (
    <div className="justify-self-end">
      <Grid className={"grid-cols-2 justify-center"}>
        <input
          type="search"
          name=""
          id=""
          className="px-5 py-3 border border-green-950 outline-transparent"
        />
        <button className="w-32 px-5 py-3 text-xl font-semibold text-white bg-green-600 rounded-tr-lg rounded-br-lg">
          search
        </button>
      </Grid>
    </div>
  );
};

export default Search;
