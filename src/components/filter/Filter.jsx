import React from "react";
import Select from "../layouts/UIhelpers/Select";
import Grid from "../layouts/UIhelpers/Grid";
import { useDispatch } from "react-redux";
import { filterBlog } from "../../feature/filter/filterBlogSlice";

const Filter = () => {
  let options = ["all", "saved", "not saved"];
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    let filter = e.target.value;
    dispatch(filterBlog(filter));
  };
  return (
    <Grid className={"grid-flow-col auto-cols-min items-center gap-x-2"}>
      <h6>Filter</h6>
      <Select options={options} onChange={handleFilter} />
    </Grid>
  );
};

export default Filter;
