import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
