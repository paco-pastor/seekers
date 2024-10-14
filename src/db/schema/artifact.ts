// WIP //

import { mysqlTable, varchar, serial } from "drizzle-orm/mysql-core";

export const artifact = mysqlTable("artifact", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  rarity: varchar("rarity", { length: 256 }).notNull(),
});

export type Artifact = typeof artifact.$inferInsert;
export type NewArtifact = typeof artifact.$inferInsert;