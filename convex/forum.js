import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const sendChat = mutation({
    args: {
        only: v.optional(v.string()),
        user: v.string(),
        body: v.optional(v.string()),
        doc: v.optional(v.id("_storage")),
        // online: v.optional(v.boolean())
    },
    handler: async (ctx, args) => {
        console.log("This TypeScript function is running on the server.");
        await ctx.db.insert("forum", {
            only: args.only,
            user: args.user,
            body: args.body,
            doc: args.doc,
            // online: args.online
        });
    },
});

export const getMessages = query({
    args: {},
    handler: async (ctx) => {
        // Get most recent messages first
        const chats = await ctx.db.query("forum").order("desc").take(50);
        // Reverse the list so that it's in a chronological order.
        return chats.reverse();
    },
});

export const deleteChats = mutation({
    args: { id: v.id("forum"), doc: v.optional(v.id("_storage")) },
    handler: async (ctx, args) => {
        if (args.doc) {
            await ctx.storage.delete(args.doc);
        }
        await ctx.db.delete(args.id);


    },
});



export const editChat = mutation({
    args: {
        id: v.id('forum'),
        newText: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            body: args.newText,
        });
    }
})

export const sendDoc = mutation({
    args: {
        only: v.optional(v.string()),
        user: v.string(),
        body: v.optional(v.string()),
        doc: v.optional(v.id("_storage")),

    },
    handler: async (ctx, args) => {
        console.log("This TypeScript function is running on the server.");
        await ctx.db.insert("forum", {
            only: args.only,
            user: args.user,
            body: args.body,
            doc: args.doc,
        });
    },
});

