import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema",
  out: "./drizzle",
  dbCredentials: {
    host: "mysql://localhost:3306", // FIXME
    user: "root",
    database: "seekers",
    password: "root",
  },
});
