import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const account = mysqlTable("account", {
	id: serial("id").notNull(),
	email: varchar("email", { length: 256 }),
	password: varchar("password", { length: 256 }),
},
(table) => {
	return {
		accountId: primaryKey({ columns: [table.id], name: "account_id"}),
		id: unique("id").on(table.id),
	}
});