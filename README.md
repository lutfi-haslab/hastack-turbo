# next-expo-trpc

Next.js + Expo + tRPC + Tailwind + Prisma + Clerk + Zod + turborepo

## structure

### apps

| key                   | value                 |
|-----------------------|-----------------------|
| [`expo`](./apps/expo) | Expo                  |
| [`next`](./apps/next) | Next.js               |

### packages

| key                                       | value     |
|-------------------------------------------|-----------|
| [`api`](./packages/api)                   | API       |
| [`utils`](./packages/utils)               | Utilities |
| [`ui`](./packages/ui)               | Shared Next & RN Component Using React Native Web |
| [`prisma`](./packages/db)               | Prisma |

# Running
```bash
yarn push 
yarn dev
```

# Custom Vercel Build
```bash
cd ../.. && yarn build
```