import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoTutorService } from './alumno-tutor.service';

describe('AlumnoTutorService', () => {
  let service: AlumnoTutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlumnoTutorService],
    }).compile();

    service = module.get<AlumnoTutorService>(AlumnoTutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
