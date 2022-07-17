import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CalculatorScreen from "./screens/CalculatorScreen";
import Home from "./screens/Home"

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stack" element={<CalculatorScreen />} />
      </Routes>
  </Router>
  )
}

export default Navigation