import { Test, TestingModule } from '@nestjs/testing';
import { ParentescoController } from './parentesco.controller';

describe('ParentescoController', () => {
  let controller: ParentescoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentescoController],
    }).compile();

    controller = module.get<ParentescoController>(ParentescoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
