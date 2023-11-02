import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
