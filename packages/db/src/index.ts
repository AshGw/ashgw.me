import type { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

import { buildPrismaClient } from "./client";

// necessary to export all types from @prisma/client!
export * from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || buildPrismaClient();

export type PrismaTxClient = Omit<
	PrismaClient<Prisma.PrismaClientOptions, never>,
	"$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;
export const ModelNames = Prisma.ModelName;
export type Models = keyof typeof Prisma.ModelName;

export type ArgsType<T extends Models> =
	Prisma.TypeMap["model"][T]["operations"]["findMany"]["args"];

export type WhereType<T extends Models> = NonNullable<ArgsType<T>["where"]>;

export type OrderByType<T extends Models> = NonNullable<ArgsType<T>["orderBy"]>;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// This is a special ID that will never exist in the DB,
// it's useful, when having to make sure a specific relation is never set.
export const PRISMA_NEVER_ID = `this-id-will-never-exist-in-the-db`;
