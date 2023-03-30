import { z, AnyZodObject } from "zod";

const Hero: AnyZodObject = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
})

export type Hero = z.infer<typeof Hero>;