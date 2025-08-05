import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";


export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});
export const generateUploadUrl2 = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});




export const sendImage = mutation({
    args: {
        storageIds: v.array(v.id("_storage")),
        author: v.string(),
        title: v.string(),
        description: v.string(),
        tags: v.string(),
        deliveryTime: v.string(),
        price: v.string(),
        category: v.string(),
        course: v.string(),
        type: v.string(),
        worker: v.optional(v.string()),
        complete: v.boolean(),
        incomplete: v.boolean(),
        onProgress: v.boolean(),

    },
    handler: async (ctx, args) => {
        await ctx.db.insert("messages", {
            bodies: args.storageIds,
            author: args.author,
            title: args.title,
            description: args.description,
            tags: args.tags,
            deliveryTime: args.deliveryTime,
            price: args.price,
            category: args.category,
            course: args.course,
            type: args.type,
            worker: args.worker,
            complete: false,
            incomplete: true,
            onProgress: false,
        });
    },
});


export const updateTask = mutation({
    args: {
        id: v.optional(v.id('messages')),
        storageIds: v.optional(v.array(v.id("_storage"))),
        title: v.optional(v.string()),
        description: v.optional(v.string()),
        tags: v.optional(v.string()),
        deliveryTime: v.optional(v.number()),
        price: v.optional(v.number()),
        category: v.optional(v.string()),
        course: v.optional(v.string()),
        type: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            bodies: args.storageIds,
            title: args.title,
            description: args.description,
            tags: args.tags,
            deliveryTime: args.deliveryTime,
            price: args.price,
            category: args.category,
            course: args.course,
            type: args.type,

        });
    }
})
export const updateTitle = mutation({
    args: {
        id: v.optional(v.id('messages')),
        title: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            title: args.title,

        });
    }
})
export const updateDescription = mutation({
    args: {
        id: v.optional(v.id('messages')),
        description: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            description: args.description,

        });
    }
})
export const updateTags = mutation({
    args: {
        id: v.optional(v.id('messages')),
        tags: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            tags: args.tags,


        });
    }
})
export const updateDeliveryTime = mutation({
    args: {
        id: v.optional(v.id('messages')),
        deliveryTime: v.optional(v.number()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            deliveryTime: args.deliveryTime,

        });
    }
})
export const updatePrice = mutation({
    args: {
        id: v.optional(v.id('messages')),
        price: v.optional(v.number()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            price: args.price,


        });
    }
})
export const updateCategory = mutation({
    args: {
        id: v.optional(v.id('messages')),
        category: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {

            category: args.category,
        });
    }
})
export const updateCourse = mutation({
    args: {
        id: v.optional(v.id('messages')),
        course: v.optional(v.string()),

    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            course: args.course,

        });
    }
})



export const deleteProj = mutation({
    args: { id: v.id("messages") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});





export const list = query(async (ctx) => {
    const messages = await ctx.db.query("messages").order("desc").collect();

    for (const message of messages) {
        message.bodies.map(async (body) => {
            await ctx.storage.getUrl(body);

        }
            // Replace the storage ID with a URL in the "body"
            // for (const sage of message.storageIds) {
            //     sage.storageId1 = await ctx.storage.getUrl(message.storageId1);
            //     sage.storageId2 = await ctx.storage.getUrl(message.storageId2);
            // }
        );

    }
    return messages;

});



export const toggleOnProgress = mutation({
    args: {
        id: v.id('messages'),
        worker: v.optional(v.string()),
        onProgress: v.boolean(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            onProgress: args.onProgress,
            worker: args.worker,
        });
    }
})

export const toggleComplete = mutation({
    args: {
        id: v.id('messages'),
        complete: v.boolean(),
        incomplete: v.boolean(),
        onProgress: v.boolean(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            complete: args.complete,
            incomplete: false,
            onProgress: false,

        });
    }
})





// export const getImages = query({
//     handler: async (ctx) => {
//         const images = await ctx.db.query("messages").collect();
//         if (!images) {
//             throw new Error("No images found");
//         }
//         for (const image of images) {
//             image.bodies.map(async (storageId) => {
//                 const imageUrls = await ctx.storage.getUrl(storageId);
//                 return imageUrls;
//             }

//             )

//         }
//     }
// }
// );
