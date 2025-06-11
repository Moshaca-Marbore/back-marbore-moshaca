import { Test, TestingModule } from '@nestjs/testing';
import { TipoReporteController } from './tipo-reporte.controller';
import { TipoReporteService } from './tipo-reporte.service';

describe('TipoReporteController', () => {
  let controller: TipoReporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoReporteController],
      providers: [TipoReporteService],
    }).compile();

    controller = module.get<TipoReporteController>(TipoReporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
