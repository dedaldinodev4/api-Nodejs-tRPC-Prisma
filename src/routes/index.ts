import { trcpServer } from "../trpc";
import { Prisma } from "@prisma/client";
import { prismaClient } from "../trpc/prisma";


export const trpcRoutes = trcpServer.router({});