import { Test, TestingModule } from '@nestjs/testing';
import { ParentescoController } from './parentesco.controller';
import { ParentescoService } from './parentesco.service';

describe('ParentescoController', () => {
  let controller: ParentescoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentescoController],
      providers: [ParentescoService],
    }).compile();

    controller = module.get<ParentescoController>(ParentescoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
