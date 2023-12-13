import React from "react";
import Container from "../layouts/UIhelpers/Container";
import Img from "../layouts/UIhelpers/Img";
import logo from "../../assets/rayan.png";
import Grid from "../layouts/UIhelpers/Grid";
import Search from "./Search";
const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <Grid className={"grid-cols-2 items-center"}>
          <Img src={logo} className={"w-32"} />
          <Search />
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
