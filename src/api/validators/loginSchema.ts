import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "ეს ველი სავალდებულოა" })
    .email({ message: "ელ-ფოსტის ფორმატი არასწორია" }),
  password: z.string().min(1, { message: "ეს ველი სავალდებულოა" }),
});

export default LoginSchema;
