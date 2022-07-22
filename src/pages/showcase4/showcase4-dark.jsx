import React from "react";
import Navbar from "../../components/Navbar";
import ShowcasesGrid from "../../components/Showcases-grid";
import DarkTheme from "../../layouts/Dark";

const Showcase4Dark = () => {
  return (
    <DarkTheme>
      <Navbar />
      <ShowcasesGrid />
    </DarkTheme>
  );
};

export default Showcase4Dark;
