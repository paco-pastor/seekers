import { mysqlTable, varchar, serial, int } from "drizzle-orm/mysql-core";

export const artifact = mysqlTable("artifact", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  rarity: varchar("rarity", { length: 256 }).notNull(),
  delay: int("delay").notNull().default(600),
});

export type Artifact = typeof artifact.$inferSelect;
export type NewArtifact = typeof artifact.$inferInsert;