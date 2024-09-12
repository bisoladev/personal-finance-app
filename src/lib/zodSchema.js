import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string("Email address is required")
    .email("Please provide a valid email address").required,
  password: z.string("Password is required").required,
});
