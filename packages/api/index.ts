import { createOpenApiNextHandler } from 'trpc-openapi';
export { appRouter } from "./src/router";
export type { AppRouter, RouterInputs, RouterOutputs } from "./src/router";

export { createContext } from "./src/context";
export type { Context } from "./src/context";
export { openApiDocument } from "./src/openapi"
export { createOpenApiNextHandler }
