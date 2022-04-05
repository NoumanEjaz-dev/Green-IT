import React from "react";
import "./App.css";
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home/index";
import About from "./Layouts/About";
import Team from "./Layouts/Team";
import Contact from "./Layouts/Contact";
import Footer from "./Layouts/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
