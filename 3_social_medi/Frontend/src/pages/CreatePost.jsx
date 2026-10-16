import axios from "axios";
import React from "react";

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res);
        alert("Post created successfully!");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("error creating post");
      });
  };

  return (
    <section className="create-post-section">
      <h1>create post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input
          type="text"
          name="caption"
          required
          placeholder="enter caption"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
