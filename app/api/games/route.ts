import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const games = await prisma.game.findMany();
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
