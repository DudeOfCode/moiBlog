
import { mutation } from "./_generated/server";
export const send = mutation(async (ctx, { body, author, format }) => {
    // A bit of a hack; we are storing the storage ID in the "body"
    await ctx.db.insert("messages", { body, author, format });
});
