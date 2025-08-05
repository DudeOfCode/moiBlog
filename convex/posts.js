import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});

export const uploadPost = mutation({
    args: {
        storageId: v.optional(v.id("_storage")),
        author: v.string(),
        title: v.string(),
        postBody: v.string(),
        tags: v.string(),
        uploadTime: v.string(),

        // category: v.string(),
        // course: v.string(),
        // type: v.string(),
        // worker: v.optional(v.string()),
        // complete: v.boolean(),
        // incomplete: v.boolean(),
        // onProgress: v.boolean(),

    },
    handler: async (ctx, args) => {
        await ctx.db.insert("posts", {
            storageId: args.storageId,
            author: args.author,
            title: args.title,
            postBody: args.postBody,
            tags: args.tags,
            uploadTime: args.uploadTime,

            // category: args.category,
            // course: args.course,

            // type: args.type,
            // worker: args.worker,
            // complete: false,
            // incomplete: true,
            // onProgress: false,
        });
    },
});


export const list = query(async (ctx) => {
    const messages = await ctx.db.query("posts").order("desc").collect();

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