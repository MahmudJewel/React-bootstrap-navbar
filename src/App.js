
import NavScrollExample from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// css 
import './assets/css/nav.css'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <NavScrollExample />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
