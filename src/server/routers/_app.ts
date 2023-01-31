import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  // createUser: procedure
  // .input(z.object({ username: z.string(), email: z.string(), password: z.string() }),)
  // .mutation(async ({ input }) => {
  //   const createdUser = await prisma.user.create({ data: { ...input } });
  //   return {success: true, newUser: createdUser};
  // }),

  createScore: procedure
    .input(z.object({ name: z.string(), score: z.number(), accuracy: z.number(), quizId: z.string() }),)
    .mutation(async ({ input }) => {
      const createdScore = await prisma.score.create({ data: { ...input } })
      return {newScore: createdScore}
    }),
  

  // hello: procedure
  //   .input(
  //     z.object({
  //       text: z.string(),
  //     }),
  //   )
  //   .query(({ input }) => {
  //     return {
  //       greeting: `hello ${input.text}`,
  //     };
  //   }),
});

export type AppRouter = typeof appRouter;