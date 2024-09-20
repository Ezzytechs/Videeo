import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Register from "./Register/Register";
import Login from "./Login/Login";

import classes from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className="Content">
        <Routes>
          <Route path="/signup" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Homepage} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
