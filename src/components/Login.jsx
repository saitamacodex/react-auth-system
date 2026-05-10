import React from "react";
import { useState } from "react";
import Profile from "./Profile.jsx";

function Login() {
  const [values, setValues] = useState({
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  function set(field) {
    return (event) => {
      return setValues((val) => {
        return {
          ...val,
          [field]: event.target.value,
        };
      });
    };
  }

  function validateFileds(val) {
    const error = {};
    if (!val.username) {
      error.username = "Username is required.";
    }
    if (!val.password) {
      error.password = "Password is required.";
    }
    return error;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const err = validateFileds(values);
    setErrors(err);

    if (Object.keys(err).length !== 0) return;

    // call login
    const url = "https://api.freeapi.app/api/v1/users/login";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        setAccessToken(data.data.accessToken);
        setIsLoggedIn(true);
        setMessage(data.message);
      } else {
        setMessage(data.message);
        setIsLoggedIn(false);
      }

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {!IsLoggedIn ? (
        <form onSubmit={handleSubmit}>
          {message && <div className="success-message">{message}</div>}
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter your username"
              value={values.username}
              onChange={set("username")}
            />
          </label>
          {errors.username && <span>{errors.username}</span>}
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={set("password")}
            />
          </label>
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <Profile token={accessToken} loginMsg={message} />
      )}
    </div>
  );
}

export default Login;
