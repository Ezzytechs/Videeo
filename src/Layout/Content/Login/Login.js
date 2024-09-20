import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import classes from "./Login.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    phoneError: false,
    passwordError: false,
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginData = { phone: phoneNumber, password: password };
      const res = await axios.post("apiurl", loginData);
      setLoading(false);
      if (res.data) {
        //do something
      }
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data?.message);
      console.error(err);
    }
  };

  return (
    <div className={classes.loginPage}>
      <div className={classes.rightSection}>
        <div className={classes.contents}>
          <div className={classes.backButton}>
            ← <Link to={"/"}>Back home</Link>
          </div>
          <h2>Welcome back!</h2>
          <form onSubmit={handleLogin}>
            <div className={classes.formGroup}>
              <label>Email address / Phone number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={error?.phoneError ? classes.inputError : ""}
                placeholder="+2348163542395"
              />
              {error?.phoneError && (
                <p className={classes.errorText}>
                  This phone number is not verified. Log in with email instead.
                </p>
              )}
            </div>
            <div className={classes.formGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error?.passwordError ? classes.inputError : ""}
                placeholder="Password"
              />
              {error?.passwordError && (
                <p className={classes.errorText}>Wrong password</p>
              )}
            </div>
            <div className={classes.formOptions}>
              <a href="/forgot-password">Forgot password</a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={classes.loginButton}>
              {loading ? <Spinner /> : "Submit"}
            </button>
            <p className={classes.signupText}>
              Don’t have an account? <Link href="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
