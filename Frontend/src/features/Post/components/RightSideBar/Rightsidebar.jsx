import React from "react";
import "./RightSideBar.scss";

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
  return (
    <aside className="right-sidebar">
      <div className="user-profile">
        <img src="https://via.placeholder.com/60" alt="" />
        <strong>Username</strong>
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
