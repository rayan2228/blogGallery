import React from "react";
import Container from "../layouts/UIhelpers/Container";
import Img from "../layouts/UIhelpers/Img";
import logo from "../../../public/rayan.png";
import Grid from "../layouts/UIhelpers/Grid";
import Search from "./Search";
import { Link } from "react-router-dom";
const Header = () => (
  <header className="py-4">
    <Container>
      <Grid className={"grid-cols-2 items-center"}>
        <Link to={"/"}>
          <Img src={logo} className={"w-32"} alt={"logo"} />
        </Link>
        <Search />
      </Grid>
    </Container>
  </header>
);

export default Header;
