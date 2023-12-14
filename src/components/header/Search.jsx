import React from "react";
import Grid from "../layouts/UIhelpers/Grid";

const Search = () => {
  return (
    <div className="justify-self-end">
      <input
        type="search"
        name=""
        id=""
        className="px-5 py-3 border border-green-950 outline-transparent text-xl"
      />
      <button className="w-32 px-5 py-3 text-xl font-semibold text-white bg-green-950 rounded-tr-lg rounded-br-lg border-2 border-green-950">
        search
      </button>
    </div>
  );
};

export default Search;
