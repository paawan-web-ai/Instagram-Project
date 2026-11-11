import React, { useEffect, useState } from "react";
import "./Posts.scss";
import axios from "axios";

const Posts = () => {
  const [posts, setposts] = useState([]);

  const getPost = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/post", {
        withCredentials: true,
      });
      // console.log(res.data.posts);
      setposts(res.data.posts);
    } catch (err) {
      console.log(err.resonse?.data || err.message);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <section className="posts">
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <header className="post-header">
            <img className="post-avatar" src={post.user.profileImage} alt="" />
            <strong>{post.user.username}</strong>
            <button
              className="post-more"
              type="button"
              aria-label="More options"
            >
              ⋯
            </button>
          </header>

          <img
            className="post-image"
            src={post.imgUrl}
            alt={`${post.username}'s post`}
          />

          <div className="post-actions">
            <button type="button" aria-label="Like post">
              ♡
            </button>
            <button type="button" aria-label="Comment on post">
              ○
            </button>
            <button type="button" aria-label="Share post">
              ⌁
            </button>
            <button
              className="save-button"
              type="button"
              aria-label="Save post"
            >
              ♧
            </button>
          </div>

          <div className="post-content">
            <strong>{post.likes} likes</strong>
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>
            <button className="comments-button" type="button">
              View all comments
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Posts;
