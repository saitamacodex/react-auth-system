import { useState } from "react";
import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [tab, setTab] = useState("");

  return (
    <>
      <h1>welcome to Auth system</h1>
      <button onClick={() => setTab("Register")}>Register</button>
      <button onClick={() => setTab("Login")}>Login</button>

      {tab === "Register" && <Register />}
      {tab === "Login" && <Login />}
    </>
  );
}

export default App;
