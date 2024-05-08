import React from "react";
import Features from "../Components/Features";
import Navbar from "../Components/NavBar";
import Quote from "../Components/Quote";

import FAQ_BOX from "../Components/FAQ_BOX";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center"></div>
      <Navbar />
      <Quote />
      <Features />
      <FAQ_BOX />
      <Footer />
    </>
  );
}

export default HomePage;
