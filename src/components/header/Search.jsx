import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBlog } from "../../feature/filter/filterBlogSlice";

const Search = () => {
  const searchValue = useSelector((state) => state.filterBlog.search);
  const [search, setSearch] = useState(searchValue);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.target.preventDefault();
    dispatch(searchBlog(search));
  };
  return (
    <div className="justify-self-end">
      <form>
        <input
          type="search"
          className="px-5 py-3 text-xl border border-green-950 outline-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-32 px-5 py-3 text-xl font-semibold text-white border-2 rounded-tr-lg rounded-br-lg bg-green-950 border-green-950"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
