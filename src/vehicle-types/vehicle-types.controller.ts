import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    BadRequestException,
} from '@nestjs/common';
import { VehicleTypesService } from './vehicle-types.service';
import {
    CreateVehicleTypeDto,
    CreateVehicleTypeDtoType,
} from './dto/create-vehicle-type.dto';
import {
    UpdateVehicleTypeDto,
    UpdateVehicleTypeDtoType,
} from './dto/update-vehicle-type.dto';

@Controller('vehicle-types')
export class VehicleTypesController {
    constructor(private readonly vehicleTypesService: VehicleTypesService) {}

    @Post()
    create(@Body() createVehicleTypeDto: CreateVehicleTypeDtoType) {
        const parseResult =
            CreateVehicleTypeDto.safeParse(createVehicleTypeDto);

        if (!parseResult.success) {
            const errors = parseResult.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }

        return this.vehicleTypesService.create(createVehicleTypeDto);
    }

    @Get()
    findAll() {
        return this.vehicleTypesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vehicleTypesService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateVehicleTypeDto: UpdateVehicleTypeDtoType,
    ) {
        const parseResult =
            UpdateVehicleTypeDto.safeParse(updateVehicleTypeDto);

        if (!parseResult.success) {
            const errors = parseResult.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }
        return this.vehicleTypesService.update(+id, updateVehicleTypeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.vehicleTypesService.remove(+id);
    }
}
