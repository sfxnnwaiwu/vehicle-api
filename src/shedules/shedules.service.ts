import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSheduleDtoType } from './dto/create-shedule.dto';
import { UpdateSheduleDtoType } from './dto/update-shedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShedulesService {
    constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateSheduleDtoType) {
        return this.prisma.schedule.create({ data: dto });
    }

    findAll() {
        return this.prisma.schedule.findMany();
    }

    async findOne(id: number) {
        const shedule = await this.prisma.schedule.findUnique({
            where: { id },
        });

        if (!shedule)
            throw new NotFoundException(`VehicleType #${id} not found`);

        return shedule;
    }

    async update(id: number, dto: UpdateSheduleDtoType) {
        await this.findOne(id);
        return this.prisma.schedule.update({ where: { id }, data: dto });
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.schedule.delete({ where: { id } });
    }
}
