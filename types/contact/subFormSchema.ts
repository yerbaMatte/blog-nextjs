import { z, ZodType } from "zod";
import { SubFormData } from "./subFormTypes";

export const SubscriptionSchema: ZodType<SubFormData> = z.object({
  email: z.string().email("Invalid email format"),
});
