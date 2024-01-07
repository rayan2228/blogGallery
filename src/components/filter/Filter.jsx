import React from "react";
import Select from "../layouts/UIhelpers/Select";
import Grid from "../layouts/UIhelpers/Grid";
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../../feature/filter/filterBlogSlice";

const Filter = () => {
  const { filter } = useSelector((state) => state.filterBlog);
  let options = ["all", "saved", "not saved"];
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    let filter = e.target.value;
    dispatch(filterBlog(filter));
  };
  return (
    <Grid className={"grid-flow-col auto-cols-min items-center gap-x-2"}>
      <h6>Filter</h6>
      <Select options={options} onChange={handleFilter} selected={filter} />
    </Grid>
  );
};

export default Filter;
