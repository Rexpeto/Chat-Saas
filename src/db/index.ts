import * as Prisma from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: Prisma.PrismaClient;
}

let prisma: Prisma.PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new Prisma.PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new Prisma.PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
