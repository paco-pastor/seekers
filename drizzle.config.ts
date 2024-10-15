import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema",
  out: "./drizzle",
  dbCredentials: {
    host: "db",
    user: "root",
    database: "seekers",
    password: "root",
  },
});
