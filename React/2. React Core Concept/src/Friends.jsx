import "./App.css";
import { use } from "react";
import Friend from "./Friend";

export default function Friends({ fetchPromise }) {
  const friends = use(fetchPromise);
  console.log(friends);
  return (
    <div className="cart">
      <h1>Friends: {friends.length}</h1>
      <ul>Friends Name:
        {
            friends.map(friend => <Friend  key={friend.id} friend={friend}></Friend>) // key is used to identify each element in the list
        }
      </ul>
    </div>
  );
}
