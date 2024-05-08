// App.js
import React from "react";
import Features from "./Components/Features";
import Navbar from "./Components/NavBar";
import Quote from "./Components/Quote";
import { AchievedReduction } from "./Components/achievedReduction";

function App() {
  return (
    <>
      <Navbar />
      <Quote />
      <Features />
    </>
  );
}

export default App;
