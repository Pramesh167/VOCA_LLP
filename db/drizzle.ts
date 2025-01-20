// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// import * as schema from "./schema";

// const sql = neon(process.env.DATABASE_URL);
// const db = drizzle(sql, { schema });

// export default db;

import "dotenv/config"; // Ensure environment variables are loaded
import { drizzle } from "drizzle-orm/node-postgres"; // Import Drizzle ORM for PostgreSQL
import { Client } from "pg"; // Import PostgreSQL client
import * as schema from "./schema"; // Import your schema

// Create a PostgreSQL client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

// Initialize Drizzle with the PostgreSQL client
const db = drizzle(client, { schema });



// Export the database instance
export default db;  


