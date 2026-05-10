import React, { useState } from "react";

function Logout({ accessToken, setIsLoggedIn }) {
  const [logoutState, setlogoutState] = useState(false);

  async function handleLogout(event) {
    const url = "https://api.freeapi.app/api/v1/users/logout";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const logoutData = await response.json();

      if (response.ok) {
        setIsLoggedIn(false);
      }
      console.log(logoutData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <br />
      <button className="logout-btn" onClick={handleLogout}>
        logout
      </button>
    </>
  );
}

export default Logout;
