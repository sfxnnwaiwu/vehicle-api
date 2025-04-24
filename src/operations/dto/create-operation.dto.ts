import { z } from 'zod';

export const CreateOperationDto = z.object({
    name: z.string().min(1, 'Operation type name is required'),
    vehicleTypeId: z.number().int(),
    quantity: z.number().int(),
});

export type CreateOperationDtoType = z.infer<typeof CreateOperationDto>;
