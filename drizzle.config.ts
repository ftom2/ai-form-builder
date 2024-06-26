import { defineConfig } from "drizzle-kit";
import "dotenv/config";

const url = process.env.DRIZZLE_DATABASE_URL!;
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
});
