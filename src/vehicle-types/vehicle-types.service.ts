import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleTypeDtoType } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDtoType } from './dto/update-vehicle-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleTypesService {
    constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateVehicleTypeDtoType): Promise<any> {
        return this.prisma.vehicleType.create({ data: dto });
    }

    findAll(): Promise<any> {
        return this.prisma.vehicleType.findMany();
    }

    async findOne(id: number): Promise<any> {
        const vehicleType = await this.prisma.vehicleType.findUnique({
            where: { id },
        });
        if (!vehicleType)
            throw new NotFoundException(`VehicleType #${id} not found`);
        return vehicleType;
    }

    async update(id: number, dto: UpdateVehicleTypeDtoType) {
        await this.findOne(id);
        return this.prisma.vehicleType.update({ where: { id }, data: dto });
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.vehicleType.delete({ where: { id } });
    }
}
