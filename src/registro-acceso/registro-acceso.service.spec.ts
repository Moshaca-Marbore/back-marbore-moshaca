import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAccesoService } from './registro-acceso.service';

describe('RegistroAccesoService', () => {
  let service: RegistroAccesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroAccesoService],
    }).compile();

    service = module.get<RegistroAccesoService>(RegistroAccesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
