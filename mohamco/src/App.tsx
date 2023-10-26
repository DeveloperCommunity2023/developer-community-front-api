import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./Pages/Main";
import Board from "./Pages/Board";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
