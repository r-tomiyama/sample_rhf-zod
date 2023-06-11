import { z } from 'zod';

export const schema = z
  .object({
    a: z.string().min(1),
    b: z.string(),
    c: z.string(),
  })
  .transform(({ b, c, ...rest }) => {
    return { ...rest, b: Number(b), c: Number(c) };
  })
  .transform(({ b, c, ...rest }) => {
    return { ...rest, sum: b + c };
  })
  .refine(({ sum }) => 3 <= sum, {
    message: 'b + c が3以上になるようにしましょう',
    path: ['b'],
  });

export type FormInput = z.input<typeof schema>;
