import { z } from 'zod';

export const CreateSheduleDto = z.object({
    vehicleTypeId: z.number().int(),
    source: z.string(),
    destination: z.string(),
    duration: z.number(),
    distance: z.number(),
});

export type CreateSheduleDtoType = z.infer<typeof CreateSheduleDto>;
