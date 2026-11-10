import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="icon-top tooltip">
        <i className="ri-instagram-line"></i>
      </div>
      <div className="all-icons">
        <div className="sidebar-icon tooltip">
          <i className="ri-home-4-line"></i>

          <span className="tooltip-text">Home</span>
        </div>

        <div className="sidebar-icon tooltip">
          <i className="ri-search-line"></i>

          <span className="tooltip-text">Search</span>
        </div>

        <div className="sidebar-icon tooltip">
          <i className="ri-compass-3-line"></i>

          <span className="tooltip-text">Explore</span>
        </div>

        <div className="sidebar-icon tooltip">
          <i className="ri-video-line"></i>

          <span className="tooltip-text">Reels</span>
        </div>

        <div className="sidebar-icon tooltip">
          <i className="ri-message-3-line"></i>

          <span className="tooltip-text">Messages</span>
        </div>

        <div className="sidebar-icon tooltip">
          <i className="ri-heart-line"></i>

          <span className="tooltip-text">Notifications</span>
        </div>

        <Link to="/create-post">
          <div className="sidebar-icon tooltip">
            {" "}
            <i class="ri-add-box-line"></i>
            <span className="tooltip-text">Post</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
