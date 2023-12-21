import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPAge";
import PersonPage from "./components/PersonPage";
import "./App.scss";

function App() {
  return (
    <div>
      <nav className="nav-list">
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
         {/*  <li>
            <NavLink to="/PersonPage">PersonPage</NavLink>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="person/:id" element={<PersonPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
