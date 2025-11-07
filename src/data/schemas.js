import z from "zod";

export const promptSchema = z.object({
  id: z.number(),
  title: z.string(),
  answers: z.array({
    text: z.string(),
    author: z.object({
      name: z.string(),
    }),
    createdAt: z.iso.date(),
  }),
});
