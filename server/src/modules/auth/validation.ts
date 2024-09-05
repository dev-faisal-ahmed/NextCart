import { z } from 'zod';

// schemas
export const registerValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(4, { message: 'Minimum length is 4' }),
});

// types
export type TRegisterPayload = z.infer<typeof registerValidationSchema>;
