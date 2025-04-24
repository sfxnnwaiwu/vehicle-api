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
import { OperationsService } from './operations.service';
import {
    CreateOperationDto,
    CreateOperationDtoType,
} from './dto/create-operation.dto';
import {
    UpdateOperationDto,
    UpdateOperationDtoType,
} from './dto/update-operation.dto';

@Controller('operations')
export class OperationsController {
    constructor(private readonly operationsService: OperationsService) {}

    @Post()
    create(@Body() createOperationDto: CreateOperationDtoType) {
        const parseDto = CreateOperationDto.safeParse(createOperationDto);
        if (!parseDto.success) {
            const errors = parseDto.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }
        return this.operationsService.create(createOperationDto);
    }

    @Get()
    findAll() {
        return this.operationsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.operationsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateOperationDto: UpdateOperationDtoType,
    ) {
        const parseDto = UpdateOperationDto.safeParse(updateOperationDto);
        if (!parseDto.success) {
            const errors = parseDto.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }
        return this.operationsService.update(+id, updateOperationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.operationsService.remove(+id);
    }
}
