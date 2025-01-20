import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle";
import { dictionary } from "@/db/schema";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } } // Ensure `id` is mapped here
) => {
  console.log("Params received in API:", params);

  // Validate the ID
  if (!params.id) {
    return NextResponse.json({ error: "Conlang ID is required" }, { status: 400 });
  }

  const conlangId = parseInt(params.id, 10);
  if (isNaN(conlangId)) {
    return NextResponse.json({ error: "Invalid Conlang ID" }, { status: 400 });
  }

  try {
    const entries = await db.query.dictionary.findMany({
      where: eq(dictionary.conlangId, conlangId),
    });

    console.log("Fetched dictionary entries:", entries);
    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error fetching dictionary:", error);
    return NextResponse.json({ error: "Failed to fetch dictionary" }, { status: 500 });
  }
};
