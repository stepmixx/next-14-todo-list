import { InsertTodo, SelectTodo, todosTable } from "../schema";
import { revalidatePath } from "next/cache";
import { db } from "../drizzle";
import { eq } from "drizzle-orm";

export class TodoService {
  static async getTodos(): Promise<SelectTodo[]> {
    return await db.select().from(todosTable);
  }

  static async addTodo({ title, description }: InsertTodo) {
    await db.insert(todosTable).values({
      title,
      description,
    });

    revalidatePath("/");
  }

  static async updateTodo({
    id,
    title,
    description,
  }: {
    id: SelectTodo["id"];
    title: SelectTodo["title"];
    description: SelectTodo["description"];
  }) {
    await db
      .update(todosTable)
      .set({
        title,
        description,
      })
      .where(eq(todosTable.id, id));

    revalidatePath("/");
  }

  static async toggleTodo({
    id,
    completed,
  }: {
    id: SelectTodo["id"];
    completed: SelectTodo["completed"];
  }) {
    await db
      .update(todosTable)
      .set({
        completed: !completed,
      })
      .where(eq(todosTable.id, id));

    revalidatePath("/");
  }

  static async deleteTodo({ id }: { id: SelectTodo["id"] }) {
    await db.delete(todosTable).where(eq(todosTable.id, id));

    revalidatePath("/");
  }
}
