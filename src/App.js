import logo from "./logo.svg";
import "./App.css";
// import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormBox from "./components/FormBox";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
       
          <Route path="/" element={<FormBox />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
