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
<<<<<<< HEAD
import { ProjectDetail } from "./Pages/ProjectDetail";
=======
import { StudyRegister } from "./Pages/StudyRegister";
import { StudyRecruit } from "./Pages/StudyRecruit";
>>>>>>> f6cf3e165b8bf8ed559c7664348b3ddb4e7f7a54

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
<<<<<<< HEAD
          <Route path="/project" element={<Project />} />
          <Route path="/project/:projectSeq" element={<ProjectDetail />} />
=======
          <Route path="/study/register" element={<StudyRegister />} />
          <Route path="/study/recruit" element={<StudyRecruit />} />
>>>>>>> f6cf3e165b8bf8ed559c7664348b3ddb4e7f7a54
          <Route path="/test" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
