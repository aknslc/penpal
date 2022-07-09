import React from "react";

// routing
import { Routes, Route } from 'react-router-dom'

// components

import Community from "./components/Community";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Routes>

    </div>
  );
}

export default App;
