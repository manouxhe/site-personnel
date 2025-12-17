import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: uuid().defaultRandom().primaryKey(),
  content: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
