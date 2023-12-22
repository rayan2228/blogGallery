import React from "react";
import Select from "../layouts/UIhelpers/Select";
import Grid from "../layouts/UIhelpers/Grid";
import { useDispatch } from "react-redux";
import { sortBlog } from "../../feature/filter/filterBlogSlice";

const Sort = () => {
  let options = ["default", "newest", "most liked"];
  const dispatch = useDispatch();
  const handleSort = (e) => {
    let filter = e.target.value;
    dispatch(sortBlog(filter));
  };
  return (
    <Grid className={"grid-flow-col auto-cols-min items-center gap-x-2"}>
      <h6>Sort</h6>
      <Select options={options} onChange={handleSort} />
    </Grid>
  );
};

export default Sort;
