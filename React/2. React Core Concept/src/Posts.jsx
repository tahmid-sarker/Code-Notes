import "./App.css";
import { use } from "react";
import Post from "./Post";

export default function Posts({ postPromise }) {
  const posts = use(postPromise);
  // console.log(posts);
  // posts.map((post => console.log(post.body)))
  return (
    <div className="cart">
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </ul>
    </div>
  );
}
