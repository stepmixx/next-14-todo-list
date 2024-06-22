"use server";
import { TodoService } from "@/db/services/todo.service";

export async function addTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title) throw new Error("Title is required");

  return await TodoService.addTodo({ title, description });
}

export async function updateTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const id = Number(formData.get("id"));

  if (!id) throw new Error("Id is required");
  if (!title) throw new Error("Title is required");

  return await TodoService.updateTodo({ title, description, id });
}

export async function toggleTodo(formData: FormData) {
  const completed = formData.get("completed") === "true";
  const id = Number(formData.get("id"));

  if (!id) throw new Error("Id is required");

  return await TodoService.toggleTodo({ completed, id });
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) throw new Error("Id is required");

  return await TodoService.deleteTodo({ id });
}
