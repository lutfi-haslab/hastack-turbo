import { z } from "zod";
import { publicProcedure, router } from "../trpc";

type Post = {
  id: string,
  title: string,
  content: string,
}

export const helloRouter = router({
  hello: publicProcedure
    .meta({ openapi: { method: 'POST', path: '/post-hello' /* 👈 */ } })
    // to using input: JSON.stringify({text:'test'}) or x-www-form-urlencoded
    .input(
      z
        .object({
          text: z.string().nullish()
        })
    )
    .output(z.object({ greeting: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
  test: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/test' /* 👈 */ } })
    .input(
      z.void()
    )
    .output(z.array(z.object({
      id: z.string(),
      title: z.string(),
      content: z.string()
    })))
    .query(({ ctx }: any) => ctx.prisma.post.findMany()),
  hi: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/hi' /* 👈 */ } })
    .input(
      z.void()
    )
    .output(z.object({ test: z.string() }))
    .query(async ({ ctx }) => {
      return {
        test: "Halo semua"
      }
    })
});
