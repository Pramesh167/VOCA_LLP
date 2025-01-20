import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { conlangs } from "@/db/schema";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id, 10);

  // Check if the ID is a valid number
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    // Check if the conlang exists in the database
    const conlang = await db.query.conlangs.findFirst({
      where: eq(conlangs.id, id),
    });

    // If the conlang doesn't exist, return a 404 error
    if (!conlang) {
      return NextResponse.json({ error: "Conlang not found" }, { status: 404 });
    }

    // Perform the deletion
    const data = await db.delete(conlangs).where(eq(conlangs.id, id));

    // Return the deleted data or a success message
    return NextResponse.json({ message: "Conlang deleted successfully", data });
  } catch (error) {
    // Catch any potential errors and return a 500 internal server error
    return NextResponse.json(
      { error: "An error occurred while deleting the conlang" },
      { status: 500 }
    );
  }
};




