import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all games
export async function GET(request: Request) {
  try {
    const games = await prisma.game.findMany();
    console.log(games);
    return new Response(JSON.stringify(games), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching games:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch games" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// Post a new game
export async function POST(request: Request) {
  const response = await request.json();

  const { title, bgg_short_description, bgg_url, bgg_image_url } = response;

  try {
    const game = await prisma.game.create({
      data: {
        title,
        bgg_short_description,
        bgg_url,
        bgg_image_url,
      },
    });
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating game" }), {
      status: 400,
      headers: {
        "Content-Type": "aplication/json",
      },
    });
  }
}
