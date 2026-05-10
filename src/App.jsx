import { useState } from "react";
import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [tab, setTab] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [LoginMessage, setLoginMessage] = useState("");

  return (
    <>
      {IsLoggedIn ? (
        <Profile token={accessToken} loginMsg={LoginMessage} />
      ) : (
        <div className="app-container">
          <h1 className="app-title">Welcome to Auth System</h1>

          <div className="tab-buttons">
            <button onClick={() => setTab("Register")}>Register</button>
            <button onClick={() => setTab("Login")}>Login</button>
          </div>

          {tab === "Register" && <Register />}
          {tab === "Login" && (
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setAccessToken={setAccessToken}
              setLoginMessage={setLoginMessage}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
