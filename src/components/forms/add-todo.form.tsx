"use client";
import React from "react";
import { SubmitBtn } from "../submit-btn.component";
import { addTodo } from "@/actions/todo.actions";
import { TextField } from "@mui/material";

export function AddTodoForm() {
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
  });

  const resetForm = () => {
    setFormValues({
      title: "",
      description: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      action={addTodo}
      style={{ display: "flex", gap: "1rem" }}
      onSubmit={resetForm}
    >
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        onChange={handleChange}
        value={formValues.title}
      />
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        onChange={handleChange}
        value={formValues.description}
      />
      <SubmitBtn>Add</SubmitBtn>
    </form>
  );
}
