import { Module } from '@nestjs/common';
import { ParentescoController } from './parentesco.controller';
import { ParentescoService } from './parentesco.service';

@Module({
  controllers: [ParentescoController],
  providers: [ParentescoService]
})
export class ParentescoModule {}
