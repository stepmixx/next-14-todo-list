import { Box, Card, CardContent, Typography } from "@mui/material";
import { DeleteTodoBtn } from "./forms/delete-todo-btn.form";
import { EditTodoBtn } from "./forms/edit-todo.form";
import { SelectTodo } from "@/db/schema";

export function TodoCard({ todo }: { todo: SelectTodo }) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3">{todo.title}</Typography>
          <Typography>{todo.description}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <EditTodoBtn todo={todo} />
          <DeleteTodoBtn id={todo.id} />
        </Box>
      </CardContent>
    </Card>
  );
}
