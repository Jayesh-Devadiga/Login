import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Splash from "./components/Splash";
import TitleBar from "./components/TitleBar";
import { displayPage, initialState } from "./redux/action";

const App = ({ isLoggedIn, displayPage, pageToDisplay, users, initialState }) => {
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("users"));
    console.log(savedState);
    if (savedState === null) initialState = users;
    else initialState(savedState);
  }, []);
  useEffect(() => {
    const serializedState = JSON.stringify(users);
    localStorage.setItem("users", serializedState);
    const savedState = JSON.parse(localStorage.getItem("users"));
    console.log(savedState);
  }, [users]);
  const renderOutPut = () => {
    if (!isLoggedIn) {
      return <Login />;
    } else {
      if (pageToDisplay === "splash") {
        return <Splash />;
      }
      if (pageToDisplay === "contact") {
        return <Contact />;
      }
      if (pageToDisplay === "about") {
        return <About />;
      }
    }
  };
  return (
    <>
      <BrowserRouter>
        <TitleBar isLoggedIn={isLoggedIn} displayPage={displayPage} />
        <div style={{ padding: "25px" }}>{renderOutPut()}</div>
      </BrowserRouter>
    </>
  );
};
const mapStateToProps = ({ users }) => {
  return {
    users: users,
    isLoggedIn: users.isLoggedIn,
    pageToDisplay: users.pageToDisplay,
  };
};

export default connect(mapStateToProps, { displayPage, initialState })(App);
