import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema",
  out: "./drizzle",
  dbCredentials: {
    host: "db", // FIXME
    user: "root",
    database: "seekers",
    password: "root",
  },
});
