/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Registeration from "./registeration/Registeration";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catagory from "./catagory/Catagory";
import SubCategoryForm from "./catagory/SubCatagoryForm";
import Status from "./status/Status";
import Asidebar from "./dashboard/Asidebar";
import Header from "./Header";
function App() {

  return (
    <>
    <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0"><Asidebar className="height-full"/></div>
        <div className="col-10 p-0">
        <Header/>
        <div className="p-5"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catagory" element={<Catagory/>}/>
        <Route path="/registeration" element={<Registeration/>}/>
        <Route path="/subcategories" element={<SubCategoryForm />} />
        <Route path="/querystatus" element={<Status />} />
      </Routes>
        </div>

      </div>
    </div>
    
    </BrowserRouter>
    </>
  );
}
export default App;
