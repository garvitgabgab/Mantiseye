import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import dashboard from "../components/dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<dashboard />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
