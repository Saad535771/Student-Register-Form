import { useState } from "react";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Registeration from "./registeration/Registeration";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catagory from "./catagory/Catagory";
import SubCatagory from "./subcatagory/SubCatagory";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catagory" element={<Catagory/>}/>
        <Route path="/registeration" element={<Registeration/>}/>
        <Route path="/subcatagory" element={<SubCatagory/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
