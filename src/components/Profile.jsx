import { useEffect, useState } from "react";
import Logout from "./Logout.jsx";

function Profile({ token, loginMsg, setIsLoggedIn }) {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(loginMsg);

  useEffect(() => {
    async function getCurrentUser() {
      const url = "https://api.freeapi.app/api/v1/users/current-user";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const userData = await response.json();

        setUser(userData.data);
      } catch (error) {
        console.log("Error occurred while fetching current user.");
      }
    }

    getCurrentUser();

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container profile-card">
      {message && <div className="success-message">{message}</div>}

      <div className="profile-header">
        {/* <img src={user?.avatar?.url} alt="avatar" className="profile-avatar" /> */}

        <div>
          <h2 className="profile-name">{user?.username}</h2>
          <p className="profile-role">{user?.role}</p>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-item">
          <span>Email</span>
          <p>{user?.email}</p>
        </div>

        <div className="profile-item">
          <span>Login Type</span>
          <p>{user?.loginType}</p>
        </div>

        <div className="profile-item">
          <span>Email Verified</span>
          <p>{user?.isEmailVerified ? "Verified ✅" : "Not Verified ❌"}</p>
        </div>

        <div className="profile-item">
          <span>Joined</span>
          <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <Logout accessToken={token} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Profile;
