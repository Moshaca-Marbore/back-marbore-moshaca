import { Test, TestingModule } from '@nestjs/testing';
import { TipoReporteService } from './tipo-reporte.service';

describe('TipoReporteService', () => {
  let service: TipoReporteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoReporteService],
    }).compile();

    service = module.get<TipoReporteService>(TipoReporteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
