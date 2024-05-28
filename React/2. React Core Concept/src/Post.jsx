import "./App.css";

export default function Post({ post }) {
  return (
    <div className="cart-mini">
      <li>{post.title} {post.id} <br /> : {post.body}</li>
    </div>
  );
}