import { mysqlTable, serial } from "drizzle-orm/mysql-core";
import { account } from "./account";
import { artifact } from "./artifact";

export const accountArtifact = mysqlTable("account_artifact", {
  artifactId: serial("artifact_id").primaryKey().references(() => artifact.id),
  accountId: serial("account_id").primaryKey().references(() => account.id),
  amount: serial("amount").notNull().default(1),
});

export type AccountArtifact = typeof accountArtifact.$inferSelect;
export type NewAccountArtifact = typeof accountArtifact.$inferInsert;