import { useEffect } from "react";
import { React, useState } from "react";
import Logout from "./Logout.jsx";

function Profile({ token, loginMsg, setIsLoggedIn }) {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(loginMsg);

  useEffect(() => {
    async function getCurrentUser() {
      const url = `https://api.freeapi.app/api/v1/users/current-user`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const userData = await response.json();

        setUser(userData);
      } catch (error) {
        console.log("Error occured white fetching the current user.");
      }
    }
    getCurrentUser();

    // clear the message once logged in
    const timer = setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {message && <div className="success-message">{message}</div>}
      <h2>Profile</h2>
      <hr />
      <br />
      <p>Email : {user?.data?.email}</p>
      <p>Username: {user?.data?.username}</p>
      <br />
      <hr />
      <Logout accessToken={token} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Profile;
