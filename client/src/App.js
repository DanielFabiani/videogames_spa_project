import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
//import axios from "axios";
import LandingPage from './views/LandingPage/LandingPage.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
      </Routes>
    </div>
  );
}

export default App;
