import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePAge";
import SearchPage from "./components/SearchPAge";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
       
      </Routes>
    </div>
  );
}

export default App;
