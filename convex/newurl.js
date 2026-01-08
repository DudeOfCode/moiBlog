import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const uploadUrl = mutation({
    args: {
        author: v.optional(v.string()),
        dLink: v.string(),


    },
    handler: async (ctx, args) => {
        await ctx.db.insert("newUrl", {
            author: args.author,
            dLink: args.dLink,

        });
    },
});


export const list = query(async (ctx) => {
    const messages = await ctx.db.query("newUrl").order("desc").collect();

    // for (const message of messages) {
    //     body = message.storageId.map(async (body) => {
    //         await ctx.storage.getUrl(body);

    //     }
    // Replace the storage ID with a URL in the "body"
    // for (const sage of message.storageIds) {
    //     sage.storageId1 = await ctx.storage.getUrl(message.storageId1);
    //     sage.storageId2 = await ctx.storage.getUrl(message.storageId2);
    // }
    //     );

    // }
    return messages;

});



export const deleteProj = mutation({
    args: {
        id: v.id("newUrl"),
    },
    handler: async (ctx, args) => {

        await ctx.db.delete(args.id);
    },
});