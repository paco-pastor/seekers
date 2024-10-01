import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const database = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "seekers",
  password: "root",
});

export default drizzle(database);

import { mysqlTable, varchar, serial } from "drizzle-orm/mysql-core";

export const account = mysqlTable("account", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export type Account = typeof account.$inferInsert;
export type NewAccount = typeof account.$inferInsert;
