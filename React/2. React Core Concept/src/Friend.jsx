import "./App.css";

export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className="cart-mini">
      <li>{name} <br /> Email: {email}</li>
    </div>
  );
}