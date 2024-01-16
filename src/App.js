import React from "react";

// import Home from "./pages/Home";
import MyRouter from './router/index.js';
import Navbar from "./components/Navbar.js";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <MyRouter />
    </div>
    
  );
}

export default App;
