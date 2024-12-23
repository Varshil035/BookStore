import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home({theme,toggleTheme}) {

  // Aaya apde theme pass kari darke componet home na
  // Ane theme rite change thase badhu
  return (
    <>
    
      <Navbar  theme={theme} toggleTheme={toggleTheme}/>
      <Banner theme={theme}/>
      <Freebook theme={theme}/>
      <Footer theme = {theme}/>
    </>
  );
}

export default Home;
