import { Test, TestingModule } from '@nestjs/testing';
import { ShedulesController } from './shedules.controller';
import { ShedulesService } from './shedules.service';

describe('ShedulesController', () => {
    let controller: ShedulesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ShedulesController],
            providers: [ShedulesService],
        }).compile();

        controller = module.get<ShedulesController>(ShedulesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
