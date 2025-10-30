import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
import JobsPage from "./pages/JobsPage";
import AllJobsPage from "./pages/AllJobsPage";
import CompaniesPage from "./pages/CompaniesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="/resume-builder" element={<ResumeBuilderPage />} />  {/* ✅ this line is important */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
