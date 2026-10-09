import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import "../../../index.css";
import Topstories from "../components/TopStories/Topstories";
import Posts from "../components/PostPage/Posts";
import Rightsidebar from "../components/RightSideBar/Rightsidebar";
const Home = () => {
  return (
    <div className="home-layout">
      <Sidebar />
      <Topstories />
      <Posts />
      <Rightsidebar />
    </div>
  );
};

export default Home;
