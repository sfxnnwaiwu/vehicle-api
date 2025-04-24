import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsModule } from './operations/operations.module';
import { ShedulesModule } from './shedules/shedules.module';
import { VehicleTypesModule } from './vehicle-types/vehicle-types.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        PrismaModule,
        OperationsModule,
        ShedulesModule,
        VehicleTypesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
