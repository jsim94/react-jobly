import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComponent";
import Home from "./components/Home";
import JobList from "./components/JobList";
import CompanyList from "./components/CompanyList";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<JobList />} />
          <Route exact path="/companies" element={<CompanyList />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
