import { z } from 'zod';

export const CreateVehicleTypeDto = z.object({
    name: z.string().min(1, 'Vehicle type name is required'),
});

export type CreateVehicleTypeDtoType = z.infer<typeof CreateVehicleTypeDto>;
