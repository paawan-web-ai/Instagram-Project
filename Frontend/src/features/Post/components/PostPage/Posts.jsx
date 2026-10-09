import React from "react";
import "./Posts.scss";

const posts = [
  {
    id: 1,
    username: "travelwithme",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&auto=format&fit=crop&q=80",
    likes: "1,248",
    caption: "Beautiful views and unforgettable moments ✨",
  },
  {
    id: 2,
    username: "daily.dose",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=80",
    likes: "864",
    caption: "A perfect day starts with good coffee ☕",
  },
];

const Posts = () => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <header className="post-header">
            <img className="post-avatar" src={post.avatar} alt="" />
            <strong>{post.username}</strong>
            <button className="post-more" type="button" aria-label="More options">
              ⋯
            </button>
          </header>

          <img className="post-image" src={post.image} alt={`${post.username}'s post`} />

          <div className="post-actions">
            <button type="button" aria-label="Like post">♡</button>
            <button type="button" aria-label="Comment on post">○</button>
            <button type="button" aria-label="Share post">⌁</button>
            <button className="save-button" type="button" aria-label="Save post">♧</button>
          </div>

          <div className="post-content">
            <strong>{post.likes} likes</strong>
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>
            <button className="comments-button" type="button">View all comments</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Posts;
