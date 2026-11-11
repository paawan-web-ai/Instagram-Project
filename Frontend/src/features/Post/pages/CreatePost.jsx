import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/createForm.scss";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // console.log(formData);
    await axios
      .post("http://localhost:3000/api/post", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      });
  };

  return (
    <main>
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" />
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter Caption"
          />

          <button>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
