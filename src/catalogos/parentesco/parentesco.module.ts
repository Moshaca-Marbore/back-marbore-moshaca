import { Module } from '@nestjs/common';
import { ParentescoService } from './parentesco.service';
import { ParentescoController } from './parentesco.controller';

@Module({
  controllers: [ParentescoController],
  providers: [ParentescoService],
})
export class ParentescoModule {}
