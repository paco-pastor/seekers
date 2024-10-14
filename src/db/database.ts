import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const database = await mysql.createConnection({
  host: "db",
  user: "root",
  database: "seekers",
  password: "root",
});

export default drizzle(database);


