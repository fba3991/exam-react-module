import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPAge";
import PersonPage from "./components/PersonPage";
import Navbar from "./components/Navbar";
import LangContext from "./components/LangContext";
import "./App.scss";

function App() {
  const [lang, setLang]=useState('eng')
  const changeLang=(newLang)=>{
    setLang(newLang)
  }
  return (
    <div>
      <LangContext.Provider value={lang}/>
      < Navbar changeLang={changeLang} />
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
