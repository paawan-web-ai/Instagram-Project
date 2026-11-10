import React from "react";
import axios from "axios";
import "../style/createForm.scss";

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData);
  };

  return (
    <main>
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" />
          <input type="text" name="title" placeholder="Enter Title" />
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
          />
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
