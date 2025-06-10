import { Test, TestingModule } from '@nestjs/testing';
import { ParentescoService } from './parentesco.service';

describe('ParentescoService', () => {
  let service: ParentescoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentescoService],
    }).compile();

    service = module.get<ParentescoService>(ParentescoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
