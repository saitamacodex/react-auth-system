import { useState } from "react";
import Login from "./Login.jsx";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    role: "ADMIN",
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState({});
  const [showLogin, setShowLogin] = useState(false);

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

  function validate(val) {
    const error = {};
    if (!val.username.trim()) {
      error.username = "Username is requried.";
    }
    if (!val.email.trim()) {
      error.email = "Email id is required.";
    }
    if (!val.password) {
      error.password = "Password is required.";
    }
    if (!val.role) {
      error.role = "Role is required";
    }
    return error;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const err = validate(values);
    setErrors(err);

    // if no errors
    const url = "https://api.freeapi.app/api/v1/users/register";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    };

    if (Object.keys(err).length === 0) {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setResponse(data);
        console.log(response.status);
        if (response.status === 200 || response.status === 409) {
          setShowLogin(true);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={values.username}
            onChange={set("username")}
            placeholder="Enter your username"
          />
        </label>
        {errors.username && <span>{errors.username}</span>}
        <label>
          Email:
          <input
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="Enter your email-id."
          />
        </label>
        {errors.email && <span>{errors.email}</span>}
        <label>
          Password:
          <input
            type="password"
            value={values.password}
            onChange={set("password")}
            placeholder="Enter your passwords."
          />
        </label>
        {errors.password && <span>{errors.password}</span>}
        <label>
          Role:
          <input
            type="text"
            value={values.role}
            onChange={set("role")}
            placeholder="Enter your roles"
          />
        </label>
        {errors.role && <span>{errors.role}</span>}
        <button type="submit">Submit</button>
      </form>
      {/* if submitted the form show alert or show login form component */}
      {showLogin && <Login />}
    </div>
  );
}

export default Register;
