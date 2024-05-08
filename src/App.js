// // App.js
// import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="success" element={<Success />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
