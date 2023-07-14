import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage.jsx';
import HomePage from "./views/HomePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import Detail from "./components/detail/Detail";
import Form from "./views/Form/Form";
/* import NameVideogames from "./views/NameVideogames/NameVideogames"; */
import axios from "axios";
axios.defaults.baseURL = 'https://videogamesspaproject-production.up.railway.app/';


function App() {
  const location = useLocation();
  

  return (
    <div className="App">
        {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/form" element={ <Form /> } />
        {/* <Route path="/name" element={ <NameVideogames />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
