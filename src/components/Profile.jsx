import { useEffect } from "react";
import { React, useState } from "react";

function Profile({ token, loginMsg }) {
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
    </div>
  );
}

export default Profile;
