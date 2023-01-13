import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { JoblyApi } from "./api/";
import { parseJwt } from "./helpers";

import { useLocalStorage } from "./hooks";
import { UserContext } from "./context";

import { Navbar, Loader, Protected } from "./components";
import {
  Home,
  Signup,
  Login,
  JobList,
  JobDetail,
  CompanyList,
  CompanyDetail,
  Profile,
  NotFound,
} from "./pages";

import "./App.css";

export default function App() {
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [token, setToken] = useLocalStorage("tokenLoader");

  const userContext = useContext(UserContext);

  useEffect(() => {
    JoblyApi.token = token;

    if (!token) {
      userContext.user = null;
      setLoadingAuth(false);
      return;
    }
    const { username } = parseJwt(token);

    const getUser = async () => {
      const user = await JoblyApi.getUser(username);
      userContext.user = user;
      setLoadingAuth(false);
    };
    getUser();
  }, [token]);

  const changeToken = (token) => {
    setLoadingAuth(true);
    setToken(token);
  };

  return loadingAuth ? (
    <Loader />
  ) : (
    <>
      <Navbar user={userContext} logout={changeToken} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/signup"
            element={
              <Protected check={userContext.isAnon}>
                <Signup changeToken={changeToken} />
              </Protected>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Protected check={userContext.isAnon}>
                <Login changeToken={changeToken} />
              </Protected>
            }
          />
          <Route
            exact
            path="/companies"
            element={
              <Protected
                check={userContext.isLoggedIn}
                msg="Please log in."
              >
                <CompanyList />
              </Protected>
            }
          />
          <Route
            exact
            path="/companies/:handle"
            element={
              <Protected
                check={userContext.isLoggedIn}
                msg="Please log in."
              >
                <CompanyDetail />
              </Protected>
            }
          />
          <Route
            exact
            path="/jobs"
            element={
              <Protected
                check={userContext.isLoggedIn}
                msg="Please log in."
              >
                <JobList />
              </Protected>
            }
          />
          <Route
            exact
            path="/jobs/:id"
            element={
              <Protected
                check={userContext.isLoggedIn}
                msg="Please log in."
              >
                <JobDetail />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
