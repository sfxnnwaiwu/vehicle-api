import { Module } from '@nestjs/common';
import { ShedulesService } from './shedules.service';
import { ShedulesController } from './shedules.controller';

@Module({
  controllers: [ShedulesController],
  providers: [ShedulesService],
})
export class ShedulesModule {}
