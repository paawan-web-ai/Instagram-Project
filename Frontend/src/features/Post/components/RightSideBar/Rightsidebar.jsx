import React, { useEffect, useState } from "react";
import "./RightSideBar.scss";
import axios from "axios";
import { register } from "../../../auth/services/auth.api";

const suggestions = [
  {
    id: 1,
    username: "wanderlust",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    username: "foodie",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    username: "fitnessguru",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Rightsidebar = () => {
  const [user, setuser] = useState("");
  const getProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/get-me",
        {
          withCredentials: true,
        },
      );

      // console.log(response.data.user);
      setuser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch profile", error);
      return null;
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <aside className="right-sidebar">
      <div className="user-profile">
        <img src={user.profileImage} alt="" />
        <strong>{user.username}</strong>
      </div>

      <div className="suggestions">
        <h4>Suggested for you</h4>
        {suggestions.map((suggestion) => (
          <div className="suggestion" key={suggestion.id}>
            <img src={suggestion.avatar} alt={suggestion.username} />
            <strong>{suggestion.username}</strong>
            <button type="button">Follow</button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Rightsidebar;
