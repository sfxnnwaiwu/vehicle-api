import { z } from 'zod';

export const UpdateSheduleDto = z.object({
    vehicleTypeId: z.number().int().optional(),
    source: z.string().optional(),
    destination: z.string().optional(),
    duration: z.number().optional(),
    distance: z.number().optional(),
});

export type UpdateSheduleDtoType = z.infer<typeof UpdateSheduleDto>;
