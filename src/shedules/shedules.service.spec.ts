import { Test, TestingModule } from '@nestjs/testing';
import { ShedulesService } from './shedules.service';

describe('ShedulesService', () => {
    let service: ShedulesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShedulesService],
        }).compile();

        service = module.get<ShedulesService>(ShedulesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
