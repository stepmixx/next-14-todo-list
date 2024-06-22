"use client";
import { deleteTodo } from "@/actions/todo.actions";
import { SubmitBtn } from "../submit-btn.component";

type DeleteTodoBtnProps = {
  id: number;
};

export function DeleteTodoBtn({ id }: DeleteTodoBtnProps) {
  return (
    <form action={deleteTodo}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn color="error">Delete</SubmitBtn>
    </form>
  );
}
