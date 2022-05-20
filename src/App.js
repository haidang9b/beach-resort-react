import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/rooms/:slug" element={<SingleRoom/>}/>
        <Route element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
