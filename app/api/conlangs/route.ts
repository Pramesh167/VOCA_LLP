// import { NextResponse } from "next/server";
// import db from "@/db/drizzle";
// import { conlangs } from "@/db/schema";

// export const GET = async () => {
//   const data = await db.query.conlangs.findMany();
//   return NextResponse.json(data);
// };

// export const POST = async (req: Request) => {
//   const body = await req.json();
//   const data = await db.insert(conlangs).values(body).returning();
//   return NextResponse.json(data[0]);
// };



// import { NextResponse } from "next/server";
// import db from "@/db/drizzle";
// import { conlangs } from "@/db/schema";

// export const GET = async () => {
//   const conlangsData = await db.query.conlangs.findMany();
//   return NextResponse.json(conlangsData);
// };

// export const POST = async (req: Request) => {
//   const { name, description } = await req.json();
//   const newConlang = await db.insert(conlangs).values({
//     name,
//     description,
//   }).returning();

//   return NextResponse.json(newConlang[0]);
// };


import { NextRequest, NextResponse } from "next/server";
import db from "@/db/drizzle"; // Database instance
import { conlangs } from "@/db/schema"; // Your schema for conlangs

// Fetch all conlangs
export const GET = async () => {
  try {
    const conlangsData = await db.query.conlangs.findMany();
    
    // If no conlangs found, return an empty array with 200 OK
    if (!conlangsData || conlangsData.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Return conlangs data with 200 OK
    return NextResponse.json(conlangsData, { status: 200 });
  } catch (error) {
    console.error("Error fetching conlangs:", error); // Log the error for debugging
    return NextResponse.json({ error: "Failed to fetch conlangs" }, { status: 500 });
  }
};

// Add a new conlang
export const POST = async (req: NextRequest) => {
  try {
    const { name, description } = await req.json();

    // Validate the input
    if (!name || !description) {
      return NextResponse.json({ error: "Name and description are required" }, { status: 400 });
    }

    // Insert the new conlang into the database
    const newConlang = await db.insert(conlangs).values({ name, description });

    // Return the newly created conlang with 201 Created status
    return NextResponse.json(newConlang, { status: 201 });
  } catch (error) {
    console.error("Error adding conlang:", error); // Log the error for debugging
    return NextResponse.json({ error: "Failed to add conlang" }, { status: 500 });
  }
};

