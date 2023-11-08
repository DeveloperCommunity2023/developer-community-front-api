import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./Pages/Main";
import { StudyCreate } from "./Pages/StudyCreate";
import { Study } from "./Pages/Study";
import { Board } from "./Pages/Board";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/create" element={<StudyCreate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
