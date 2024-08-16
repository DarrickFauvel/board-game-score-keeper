import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Get a single game
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const game = await prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { error: "Failed to fetch game" },
      { status: 500 },
    );
  }
}

// Delete a game
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const games = await fetch("/api/games");
}
