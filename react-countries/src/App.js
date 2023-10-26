//Imports
import axios from "axios"
import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//components
import Navbar from "./components/Nabar"

//pages
import CountriesIndex from "./pages/Countries/Index"
import Home from "./pages/Home"

function App() {  
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/countries" element={<CountriesIndex/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
