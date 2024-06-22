import { Box, Card, CardContent, Typography } from "@mui/material";
import { DeleteTodoBtn } from "@/components/forms/delete-todo-btn.form";
import { AddTodoForm } from "@/components/forms/add-todo.form";
import { TodoService } from "@/db/services/todo.service";
import { SelectTodo } from "@/db/schema";

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

function TodoCard({ todo }: { todo: SelectTodo }) {
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
        <DeleteTodoBtn id={todo.id} />
      </CardContent>
    </Card>
  );
}
