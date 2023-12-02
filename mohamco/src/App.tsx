import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./Pages/Main";
import { StudyCreate } from "./Pages/StudyCreate";
import { Study } from "./Pages/Study";
import { Project } from "./Pages/Project";
import { Board } from "./Pages/Board";
import { Profile } from "./Pages/Profile";
import { BoardWrite } from "./Pages/BoardWrite";
import { ProjectDetail } from "./Pages/ProjectDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board/:boardSeq" element={<Board />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/create" element={<StudyCreate />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:projectSeq" element={<ProjectDetail />} />
          <Route path="/test" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
