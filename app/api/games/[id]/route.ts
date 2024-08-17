import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

type ParamsProps = {
  params: {
    id: string;
  };
};

// Get a single game
export async function GET(request: Request, { params }: ParamsProps) {
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

// Update a game
export async function UPDATE(request: Request, { params }: ParamsProps) {
  const { id } = params;

  try {
    const body = await request.json();

    const updatedGame = await prisma.game.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedGame);
  } catch (error) {
    console.error("Error updating game", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Failed to update game" },
      { status: 500 },
    );
  }
}

// Delete a game
export async function DELETE(request: Request, { params }: ParamsProps) {
  const { id } = params;

  try {
    const game = await prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    await prisma.game.delete({
      where: { id },
    });

    return NextResponse.json({
      message: `Game "${game.title}" deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting game", error);
    return NextResponse.json(
      { error: "Failed to delete game" },
      { status: 500 },
    );
  }
}
