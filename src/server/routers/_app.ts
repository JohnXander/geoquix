import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  
  getAllScores: procedure
    .query(async () => {
      const foundScores = await prisma.score.findMany();
      return foundScores
    }),

  createScore: procedure
    .input(z.object({ name: z.string(), score: z.number(), accuracy: z.number(), quiz: z.string() }),)
    .mutation(async ({ input }) => {
      const createdScore = await prisma.score.create({ data: { ...input } })
      return { createdScore }
    }),

});

export type AppRouter = typeof appRouter;