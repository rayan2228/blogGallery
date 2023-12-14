import React from "react";
import Select from "../layouts/UIhelpers/Select";
import Grid from "../layouts/UIhelpers/Grid";

const Filter = () => {
  let options = ["all", "saved"];
  return (
    <Grid className={"grid-flow-col auto-cols-min items-center gap-x-2"}>
      <h6>Filter</h6>
      <Select options={options} />
    </Grid>
  );
};

export default Filter;
