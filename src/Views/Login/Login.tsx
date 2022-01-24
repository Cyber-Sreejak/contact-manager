import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const payload = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      payload
    );
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="auth-wrapper login-wrapper">
      <div className="auth-form login-form text-center">
        <h4>Login</h4>
        <div className="mb-3">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="mb-3">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="my-2">
          <Button block color="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div>
          <p className="mb-0">Don't have an account yet?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
