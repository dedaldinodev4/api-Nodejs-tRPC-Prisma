import { initTRPC } from '@trpc/server'
import { Context } from './context';


export const trcpServer = initTRPC.context<Context>().create();
export const trpcRoutes = trcpServer.router;
export const trpcProcedure = trcpServer.procedure;
export const trpcMiddleware = trcpServer.middleware;
export const trpcMergeRoutes = trcpServer.mergeRouters;


