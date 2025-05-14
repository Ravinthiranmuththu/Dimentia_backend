import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PatientUser from './pages/PatientUser';
import GraphTab from './pages/GraphTab';
import ChapterPage from './pages/ChapterPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />

          {/* 👇 Dynamic route with username */}
          <Route path="/patient-profile/:username" element={<PatientUser />} />

          <Route path="/graph-tab" element={<GraphTab />} />
          <Route path="/home/patient/:chapterId" element={<ChapterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
