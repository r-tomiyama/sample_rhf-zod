import { z } from 'zod';

export const schema = z.object({
  a: z.string(),
  b: z.string(),
  c: z.string(),
});

export type FormInput = z.input<typeof schema>;
