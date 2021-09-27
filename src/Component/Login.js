import React, { useState } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {

  let history = useHistory();
  const [login, setlogin] = useState({

    username: "",
    password: ""
  });

  const { username, password } = login;
  const onInputChange = e => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // await axios.post("http://localhost:3001/login", login);

    history.push('./user/add')

  };

  return (
    <div className="container-fluid center col-md-4">
      <div className="py-4">
        <h3>Login</h3>
        <form onSubmit={e => onSubmit(e)}>
          <div class="form-group">
            <label for="username">User name</label>
            <input
              type="text"
              class="form-control"
              id="username" name="username"
              placeholder="username" value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password" name="password"
              placeholder="password" value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-dark col-sm-12" to="/Home">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
