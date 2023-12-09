import React from "react";
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";
import DeviceList from "./pages/DeviceList/DeviceList";
import Drivers from "./pages/Drivers/Drivers";

function App() {
  return (
        <div className="main">
          <BrowserRouter>
            <AppBarComponent /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/objects" element={<DeviceList />} />
              <Route path="/drivers" element={<Drivers />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
