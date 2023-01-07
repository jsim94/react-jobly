import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";
import CompanyList from "./pages/CompanyList";
import CompanyDetail from "./pages/CompanyDetail";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<JobList />} />
          <Route exact path="/jobs/:id" element={<JobDetail />} />
          <Route exact path="/companies" element={<CompanyList />} />
          <Route
            exact
            path="/companies/:handle"
            element={<CompanyDetail />}
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
