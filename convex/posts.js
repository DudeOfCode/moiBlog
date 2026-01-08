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
        //uploadTime: v.optional(v.string()),
        like: v.optional(v.boolean())
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
            //uploadTime: args.uploadTime,
            like: false,
            // category: args.category,
            // course: args.course,

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


export const deleteProj = mutation({
    args: { id: v.id("messages"), storageId: v.id("_storage") },
    handler: async (ctx, args) => {
        if (args.storageId) {
            await ctx.storage.delete(args.storageId);
        }
        await ctx.db.delete(args.id);
    },
});



export const updatePostBody = mutation({
    args: {
        id: v.optional(v.id('posts')),
        postBody: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            postBody: args.postBody,

        });
    }
})
export const updateTitle = mutation({
    args: {
        id: v.optional(v.id('posts')),
        title: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            title: args.title,

        });
    }
})
export const updateTag = mutation({
    args: {
        id: v.optional(v.id('posts')),
        tags: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            tags: args.tags,

        });
    }
})