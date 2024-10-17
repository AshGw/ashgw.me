import { PrismaClient } from "@prisma/client";
import { decryptVar } from "@jobflow/env-validator";

export const buildPrismaClient = () => {
	const dbUrl =
		process.env.DATABASE_URL_DECRYPTED === `true`
			? process.env.DATABASE_URL
			: decryptVar(process.env.DATABASE_URL, "DATABASE_URL");

	const prisma = new PrismaClient({
		log:
			process.env.ENABLE_PRISMA_LOGS === "true"
				? ["query", "error", "warn"]
				: ["error"],
		datasources: {
			db: {
				url: dbUrl,
			},
		},
	});

	return prisma;

	// The current '$extends' Api is very limited, and doesn't provide the features we need.
	// Further more, the 'modeClient' returned by '$extends' doesn't have the,
	// '$use' method, which is required by the sentry tracing module.
	// Because of this we are not using the '$extends' api, currently,
	// but will wait a while until it is more mature.

	// get context, of model calling this method
	// const ctx = Prisma.getExtensionContext(this)

	// Examples for client methods:
	// -https://www.prisma.io/docs/concepts/components/prisma-client/client-extensions/extension-examples
	// this currently doesn't work, see: https://github.com/prisma/prisma/discussions/20554
	const modClient = prisma.$extends({
		query: {
			// conversation: {
			// 	async create({ model, operation, args, query }) {
			// 		const result = await query(args);
			// 		// console.log(`IN CONVERSATION CREATE!`);
			// 		// console.log(args);
			// 		// am I allowed to do this?
			// 		return result;
			// 	},
			// },
			// conversationPart: {
			// 	async create({ model, operation, args, query }) {
			// 		const result = await query(args);
			// 		// am I allowed to do this?
			// 		await prisma.conversation.update({
			// 			where: {
			// 				id: result.conversationId,
			// 			},
			// 			data: {
			// 				lastConvoPartSentAtMillis: result.createdAt
			// 					? result.createdAt
			// 					: new Date(),
			// 			},
			// 		});
			// 		return result;
			// 	},
			// 	async createMany({ model, operation, args, query }) {
			// 		const result = await query(args);
			// 		const partsData = Array.isArray(args.data) ? args.data : [args.data];
			// 		console.log(`IN CONVERSATION PART CREATE! (MANY!!!)`);
			// 		console.log(partsData);
			// 		const newConvTimes: {
			// 			convId: string;
			// 			lastSentDate: Date;
			// 		}[] = [];
			// 		partsData.forEach(({ conversationId, createdAt }) => {
			// 			if (conversationId && createdAt) {
			// 				const crData = new Date(createdAt);
			// 				// check if exists, with conv id, and if createdAt is newer, then update,
			// 				// else, create
			// 				const existing = newConvTimes.find(
			// 					(convTime) => convTime.convId === conversationId,
			// 				);
			// 				if (existing) {
			// 					if (crData > existing.lastSentDate) {
			// 						existing.lastSentDate = crData;
			// 					}
			// 				} else {
			// 					newConvTimes.push({
			// 						convId: conversationId,
			// 						lastSentDate: crData,
			// 					});
			// 				}
			// 			}
			// 		});
			// 		await Promise.all(
			// 			newConvTimes.map(({ convId, lastSentDate }) => {
			// 				return prisma.conversation.update({
			// 					where: {
			// 						id: convId,
			// 					},
			// 					data: {
			// 						lastConvoPartSentAtMillis: lastSentDate,
			// 					},
			// 				});
			// 			}),
			// 		);
			// 		return result;
			// 	},
			// },
		},
	});

	return modClient;
};
