import { AddTodoForm } from "@/components/forms/add-todo.form";
import { TodoCard } from "@/components/todo-card.component";
import { TodoService } from "@/db/services/todo.service";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  const todos = await TodoService.getTodos();
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          marginTop: "4rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Typography variant="h1">Todos</Typography>
        <AddTodoForm />
        <Box
          sx={{
            width: "800px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            alignItems: "center",
            borderRadius: "8px",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          {todos.length ? (
            todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography variant="h3">No todos found</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </main>
  );
}
