import { z } from 'zod';

export const UpdateVehicleTypeDto = z.object({
    name: z.string().min(1).optional(),
});

export type UpdateVehicleTypeDtoType = z.infer<typeof UpdateVehicleTypeDto>;
