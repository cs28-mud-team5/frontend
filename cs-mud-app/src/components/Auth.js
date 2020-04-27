import React, { useState } from "react";
<<<<<<< HEAD
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
=======
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
>>>>>>> db3f3cc14bd03a89c13e26acf6afe040fc0a8986

import axiosWithAuth from "./axiosWithAuth";

const Auth = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login/", user)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
      })
      .catch((err) => console.log("Login error: ", err));
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChanges}
          />
        </FormGroup>
        <Button onClick={handleLogin}>Log In</Button>
      </Form>
      <Link to="/register">New user? Sign up!</Link>
    </div>
  );
};

export default Auth;