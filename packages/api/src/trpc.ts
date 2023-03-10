import { initTRPC } from "@trpc/server";
import type { Context } from "./context";
import superjson from "superjson";
import { OpenApiMeta } from 'trpc-openapi';

export const t = initTRPC.context<Context>().meta<OpenApiMeta>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;