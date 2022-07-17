import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ParcelLockerH1} from "./components/PacelLockerH1/ParcelLockerH1";
import {Home} from "./components/Home/Home";
import {Form} from "./components/Form/Form";

export const App = () => {
  return (
    <div className="App">
      <ParcelLockerH1/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
    </div>
  );
}

