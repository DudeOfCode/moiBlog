import React from 'react'

export const Messages = () => {
  return (
    <div>Messages</div>
  )
}

// export const createConversation = mutation({
//   args: { otherUserId: v.id("users") },
//   handler: async (ctx, args) => {
//     const currentUser = await getCurrentUserOrThrow(ctx);
//     // Check if a conversation already exists between these two users
//     const existingConversation = await ctx.db
//       .query("friends")
//       .filter(q => q.eq(q.field("user1"), currentUser._id))
//       .filter(q => q.eq(q.field("user2"), args.otherUserId))
//       .first();

//     if (existingConversation) {
//       return existingConversation.conversationId;
//     }

//     // If not, create a new conversation
//     const conversationId = await ctx.db.insert("conversations", {
//       isGroup: false,
//     });

//     await ctx.db.insert("friends", {
//       user1: currentUser._id,
//       user2: args.otherUserId,
//       conversationId,
//     });

//     return conversationId;
//   },
// });


// friends: defineTable({
//   user1: v.id("users"),
//   user2: v.id("users"),
//   conversationId: v.id("conversations"),
// })
//   .index("by_user1", ["user1"])
//   .index("by_user2", ["user2"])
//   .index("by_conversationId", ["conversationId"]),

//   conversations: defineTable({
//     name: v.optional(v.string()),
//     isGroup: v.boolean(),
//     lastMessageId: v.optional(v.id("messages")),
//   }),


// const messages = useQuery(api.messages.list, { conversationId });

// const sendMessage = useMutation(api.messages.send);

// // In your send message handler:
// await sendMessage({ conversationId, body: messageText });



// export async function getCurrentUserOrThrow(ctx: QueryCtx) {
//   const userRecord = await getCurrentUser(ctx);
//   if (!userRecord) throw new Error("Can't get current user");
//   return userRecord;
// }

// export async function getCurrentUser(ctx: QueryCtx) {
//   const identity = await ctx.auth.getUserIdentity();
//   if (identity === null) {
//     return null;
//   }
//   return await userByExternalId(ctx, identity.subject);
// }

// async function userByExternalId(ctx: QueryCtx, externalId: string) {
//   return await ctx.db
//     .query("users")
//     .withIndex("byExternalId", (q) => q.eq("externalId", externalId))
//     .unique();
// }