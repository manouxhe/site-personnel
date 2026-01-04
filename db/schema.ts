import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: uuid().defaultRandom().primaryKey(),
  content: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});


export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  login: text().notNull().unique(),
  password: text().notNull(),
})