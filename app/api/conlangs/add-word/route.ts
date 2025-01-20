import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { dictionary } from "@/db/schema";

export const POST = async (req: NextRequest) => {
  try {
    const { conlangId, word, meaning } = await req.json();

    if (!conlangId || !word || !meaning) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newEntry = await db.insert(dictionary).values({ conlangId, word, meaning }).returning();
    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error adding word:", error);
    return NextResponse.json({ error: "Failed to add word" }, { status: 500 });
  }
};
