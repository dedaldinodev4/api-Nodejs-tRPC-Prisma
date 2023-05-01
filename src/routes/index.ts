import { trpcRoutes } from "../trpc";
import { heroRoutes } from "./hero.routes";


export const appRouter = trpcRoutes({
  hero: heroRoutes,
})

export type AppRouter = typeof appRouter;