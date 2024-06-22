import { Button, ButtonProps } from "@mui/material";
import { useFormStatus } from "react-dom";

export function SubmitBtn({
  children,
  ...props
}: Omit<ButtonProps, "variant" | "disabled" | "type">) {
  const { pending } = useFormStatus();

  return (
    <Button variant="contained" disabled={pending} type="submit" {...props}>
      {children}
    </Button>
  );
}
