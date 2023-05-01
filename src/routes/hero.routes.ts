import { trcpServer, trpcProcedure, trpcRoutes } from "../trpc";
import { Prisma } from "@prisma/client";
import { prismaClient } from "../trpc/prisma";
import { Hero } from "../entities/Hero";
import { z } from 'zod'

export const heroRoutes = trpcRoutes({

  heroCreate: trpcProcedure
    .input(z.object({ 
      name: z.string(), 
      description: z.string(), 
      image: z.string().optional() })
    )
    .mutation(async (opts) => {
      const {input } = opts;

      const hero = await prismaClient.hero.create(input);
      return hero;
    })
  
  , heroList: trpcProcedure
      .query(async () => {
        const heroes = await prismaClient.hero.findMany();
        return heroes;
      })
    , heroById: trpcProcedure
        .input(z.string())
        .query(async (opts) => {
          const { input } = opts;

          const hero = await prismaClient.hero.findFirst({
            where: {id: input}
          })
          return hero;
        })


});

