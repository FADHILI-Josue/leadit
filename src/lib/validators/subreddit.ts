import { z } from "zod";

export const SubredditValidator = z.object({
    name: z.string().min(3).max(3).max(21),
})

export const SubreddiSubscriptiontValidator = z.object({
    sureddit: z.string()
})

export type createSubredditPayload = z.infer<typeof SubredditValidator>
export type createToSubredditPayload = z.infer<typeof SubreddiSubscriptiontValidator>