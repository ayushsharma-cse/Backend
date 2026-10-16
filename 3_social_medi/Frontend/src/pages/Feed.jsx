import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      image: "https://ik.imagekit.io/2azzyvyc79/image_brEDKAXBR.jpg",
      caption: "beautiful photos",
    },
  ]);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>no posts available</h1>
      )}
    </section>
  );
};

export default Feed;
