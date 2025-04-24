import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperationDtoType } from './dto/create-operation.dto';
import { UpdateOperationDtoType } from './dto/update-operation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperationsService {
    constructor(private prisma: PrismaService) {}

    create(dto: CreateOperationDtoType) {
        return this.prisma.operation.create({ data: dto });
    }

    findAll() {
        return this.prisma.operation.findMany();
    }

    async findOne(id: number) {
        const operation = await this.prisma.operation.findUnique({
            where: { id },
        });
        if (!operation)
            throw new NotFoundException(`Operation #${id} not found`);
        return operation;
    }

    async update(id: number, dto: UpdateOperationDtoType) {
        await this.findOne(id);
        return this.prisma.operation.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.operation.delete({ where: { id } });
    }
}
