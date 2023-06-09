import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { createContext } from './trpc/context'
import { appRouter } from './routes'


export const server = express();


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/trpc', createExpressMiddleware({
  router: appRouter,
  createContext
}));


export type AppRouter = typeof appRouter;


