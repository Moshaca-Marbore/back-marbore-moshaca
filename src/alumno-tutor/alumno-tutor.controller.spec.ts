import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoTutorController } from './alumno-tutor.controller';
import { AlumnoTutorService } from './alumno-tutor.service';

describe('AlumnoTutorController', () => {
  let controller: AlumnoTutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnoTutorController],
      providers: [AlumnoTutorService],
    }).compile();

    controller = module.get<AlumnoTutorController>(AlumnoTutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
