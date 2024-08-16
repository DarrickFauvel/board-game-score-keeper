"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type GameProps = {
  title: string;
  bgg_short_description: string;
  bgg_url: string;
  bgg_image_url: string;
};

const AddGameForm = () => {
  const [game, setGame] = useState({
    title: "",
    bgg_short_description: "",
    bgg_url: "",
    bgg_image_url: "",
  });

  const addGame = async (game: GameProps) => {
    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      });

      if (!response.ok) {
        throw new Error("Failed to add game");
      }

      const data = await response.json();
      console.log("Game added:", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occured");
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setGame((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addGame(game);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label" htmlFor="game-title">
          Title
        </label>
        <input
          className="input"
          type="text"
          name="title"
          value={game.title}
          id="game-title"
          placeholder="Enter game title"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="bgg_short_description">
          BGG short description
        </label>
        <input
          className="input"
          type="text"
          name="bgg_short_description"
          value={game.bgg_short_description}
          id="bgg_short_description"
          placeholder="Enter BGG short description"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="bgg_url">
          BGG url
        </label>
        <input
          className="input"
          type="text"
          name="bgg_url"
          value={game.bgg_url}
          id="bgg_url"
          placeholder="Enter BGG url"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="bgg_image_url">
          BGG image url
        </label>
        <input
          className="input"
          type="text"
          name="bgg_image_url"
          value={game.bgg_image_url}
          id="bgg_image_url"
          placeholder="Enter BGG image url"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default AddGameForm;
