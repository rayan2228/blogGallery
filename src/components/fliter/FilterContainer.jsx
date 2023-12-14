import React from "react";
import Filter from "./Filter";
import Grid from "../layouts/UIhelpers/Grid";
import Container from "../layouts/UIhelpers/Container";
import Sort from "./Sort";

const FilterContainer = () => {
  return (
    <Container>
      <Grid className={"grid-flow-col auto-cols-min gap-x-5"}>
        <Filter />
        <Sort />
      </Grid>
    </Container>
  );
};

export default FilterContainer;
