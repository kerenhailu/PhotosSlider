// import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/food">Food</Link>
      <Link to="/music">Music</Link>
      <Link to="/sport">Sport</Link>
      <Link to="/">All</Link>
    </div>
  );
}
