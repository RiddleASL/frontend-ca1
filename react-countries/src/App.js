//Imports
import axios from "axios"
import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//components
import Navbar from "./components/Nabar"

//pages
import Home from "./pages/Home"
import CountriesIndex from "./pages/Countries/Index"
import CountriesShow from "./pages/Countries/Show"

function App() {  
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/countries" element={<CountriesIndex/>}></Route>
            <Route path="/countries/:cca3" element={<CountriesShow/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
