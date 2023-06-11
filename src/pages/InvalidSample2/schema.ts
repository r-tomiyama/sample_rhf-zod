import { z } from 'zod';

export const schema = z
  .object({
    a: z.string().min(1),
    numbers: z
      .object({
        b: z.string(),
        c: z.string(),
      })
      .transform(({ b, c }) => {
        return { b: Number(b), c: Number(c) };
      })
      .transform((data) => {
        return { sum: data.b + data.c };
      })
      .refine(({ sum }) => 3 <= sum, {
        message: 'b + c が3以上になるようにしましょう',
        path: ['b'],
      }),
  })
  .transform(({ a, numbers }) => {
    return { a, sum: numbers.sum };
  });

export type FormInput = z.input<typeof schema>;
