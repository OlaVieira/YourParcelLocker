import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ParcelLockerH1} from "./components/PacelLockerH1/ParcelLockerH1";
import {Home} from "./components/Home/Home";

export const App = () => {
  return (
    <div className="App">
      <ParcelLockerH1/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

