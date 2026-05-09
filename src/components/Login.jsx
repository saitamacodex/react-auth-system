import React from "react";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState({});

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

      setResponse(data);

      if (response.status === 200) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <br />
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
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
