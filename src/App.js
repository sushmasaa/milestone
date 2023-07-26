import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/home";
import Menu from "./Components/menu";
import About from "./Components/about";

import Navbar from "./Components/navbar";
function App(){
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;