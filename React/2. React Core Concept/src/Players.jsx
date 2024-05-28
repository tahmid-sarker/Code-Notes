import { useEffect, useState } from "react";

export default function Player() {
  const [players, setPlayers] = useState([]);

  useEffect(() => { // useEffect is used to fetch the data from the API when the component is mounted
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  
  return (
    <>
      <h1>Players: {players.length}</h1>
      <ol>
        {
            players.map(player => <li>Player Name: {player.name}</li>)
        }
      </ol>
    </>
  );
}
