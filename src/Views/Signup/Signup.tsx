import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
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

  const handleSignup = async () => {
    await axios.post("http://localhost:8000/auth/signup", payload);
  };

  return (
    <div className="auth-wrapper signup-wrapper">
      <div className="auth-form signup-form text-center">
        <h4>Signup</h4>
        <div className="mb-3">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
          />
          {/* <div>
            <p className="mb-0 text-danger mt-1">Incorrect email</p>
          </div> */}
        </div>
        <div className="mb-3">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {/* <div>
            <p className="mb-0 text-danger mt-1">Invalid password</p>
          </div> */}
        </div>
        {/* <div className="mb-3">
          <Input type="password" />
          <div>
            <p className="mb-0 text-danger mt-1">Password doesnt match</p>
          </div>
        </div> */}
        <div className="my-2">
          <Button block color="primary" onClick={handleSignup}>
            Signup
          </Button>
        </div>
        <div>
          <p className="mb-0">Already have an account?</p>
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
