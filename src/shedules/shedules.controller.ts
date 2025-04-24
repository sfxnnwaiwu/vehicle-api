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
import { ShedulesService } from './shedules.service';
import {
    CreateSheduleDto,
    CreateSheduleDtoType,
} from './dto/create-shedule.dto';
import {
    UpdateSheduleDto,
    UpdateSheduleDtoType,
} from './dto/update-shedule.dto';

@Controller('shedules')
export class ShedulesController {
    constructor(private readonly shedulesService: ShedulesService) {}

    @Post()
    create(@Body() createSheduleDto: CreateSheduleDtoType) {
        const parseDto = CreateSheduleDto.safeParse(createSheduleDto);
        if (!parseDto.success) {
            const errors = parseDto.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }
        return this.shedulesService.create(createSheduleDto);
    }

    @Get()
    findAll() {
        return this.shedulesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.shedulesService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateSheduleDto: UpdateSheduleDtoType,
    ) {
        const parseDto = UpdateSheduleDto.safeParse(updateSheduleDto);
        if (!parseDto.success) {
            const errors = parseDto.error.flatten().fieldErrors;
            throw new BadRequestException({
                message: 'Validation failed',
                errors,
            });
        }
        return this.shedulesService.update(+id, updateSheduleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.shedulesService.remove(+id);
    }
}
