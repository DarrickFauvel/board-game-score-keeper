"use client";

import { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch("/api/games");
      const data = await res.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div>
      List of games here...
      <div>{games}</div>
    </div>
  );
};
export default Games;
