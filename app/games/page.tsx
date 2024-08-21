"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type GameProps = {
  id: string;
  title: string;
  bgg_image_url: string;
};

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
      {games.length > 0 && (
        <ul>
          {games.map((game: GameProps) => (
            <li className="flex items-center gap-3" key={game.id}>
              <Link href={`/games/${game.id}`}>
                <Image
                  src={game.bgg_image_url}
                  width={50}
                  height={50}
                  alt={game.title}
                />
                <span>{game.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Games;
