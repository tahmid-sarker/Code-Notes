import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import { Suspense } from "react";

function App() {
  //Users
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then( // Fetching data from API
    (res) => res.json()
  );

  //Friends
  const fetchFriends = async () => { // Async function to fetch the friends data
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    } catch (error) {
      console.error("Error Message", error);
    }
  };

  const fetchPromise = fetchFriends(); // Calling the async function to fetch the friends data

  //Posts
  const postFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const postPromise = postFetch();


  return (
    <>
      <Button></Button>
      <hr />
      <Counter></Counter>
      <hr />
      <Batsman></Batsman>
      <hr />
      <Suspense fallback={<p>Loading...</p>}> {/* Suspense is used to handle the loading state of the components and show a fallback UI */}
        <Users fetchUsers={fetchUsers}></Users>
        <Friends fetchPromise={fetchPromise}></Friends>
        <Posts postPromise={postPromise}></Posts>
        <Players></Players>
      </Suspense>
      <hr />
    </>
  );
}

export default App;
