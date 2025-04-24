import { z } from 'zod';

export const UpdateOperationDto = z.object({
    name: z.string().min(1).optional(),
    vehicleTypeId: z.number().int().optional(),
    quantity: z.number().int().optional(),
});

export type UpdateOperationDtoType = z.infer<typeof UpdateOperationDto>;
