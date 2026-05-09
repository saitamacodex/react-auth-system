import { useState } from "react";
import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [tab, setTab] = useState("");

  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to Auth System</h1>

      <div className="tab-buttons">
        <button onClick={() => setTab("Register")}>Register</button>

        <button onClick={() => setTab("Login")}>Login</button>
      </div>

      {tab === "Register" && <Register />}
      {tab === "Login" && <Login />}
    </div>
  );
}

export default App;
