import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "../Components/Food/food-comonent";
import Home from "../Components/Home/home-component";
import Music from "../Components/Music/music-component";
import Navbar from "../Components/NavBar/navbar-component";
import Sport from "../Components/Sport/sport-component";

const PageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/sport" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default PageRouting;
