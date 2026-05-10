import { useEffect } from "react";
import { React, useState } from "react";
import Logout from "./Logout.jsx";

function Profile({ token, loginMsg, setIsLoggedIn }) {
  const [user, setUser] = useState({});

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
  }, []);

  return (
    <div>
      {loginMsg && <div className="success-message">{loginMsg}</div>}
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
