"use client";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { SubmitBtn } from "../submit-btn.component";
import { updateTodo } from "@/actions/todo.actions";
import { SelectTodo } from "@/db/schema";

export function EditTodoBtn({ todo }: { todo: SelectTodo }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Edit
      </Button>
      <EditTodoDialog todo={todo} open={open} handleClose={handleClose} />
    </>
  );
}

function EditTodoDialog({
  todo,
  open,
  handleClose,
}: {
  todo: SelectTodo;
  handleClose: () => void;
  open: boolean;
}) {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          padding: "1rem",
        },
      }}
    >
      <DialogTitle>Edit Todo</DialogTitle>
      <form
        action={async (formData) => {
          await updateTodo(formData);
          handleClose();
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input type="hidden" name="id" value={todo.id} />
          <TextField
            required
            fullWidth
            autoFocus
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            defaultValue={todo.title}
          />
          <TextField
            fullWidth
            id="description"
            variant="outlined"
            name="description"
            label="Description"
            defaultValue={todo.description}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <SubmitBtn>Edit</SubmitBtn>
        </DialogActions>
      </form>
    </Dialog>
  );
}
