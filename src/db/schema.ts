import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertTodo = typeof todosTable.$inferInsert;
export type SelectTodo = typeof todosTable.$inferSelect;
