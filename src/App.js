import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage"
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="/" element={< ProjectsPage/>} />
                  <Route path="/projects" element={< ProjectsPage/>} />
                  <Route exact path="*" element={< PageNotFound/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
