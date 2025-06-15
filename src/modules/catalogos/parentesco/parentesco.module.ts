import { Module } from '@nestjs/common';
import { ParentescoService } from './parentesco.service';
import { ParentescoController } from './parentesco.controller';

/**
 * Módulo de NestJS para el catálogo de parentescos familiares.
 *
 * Agrupa el controlador y servicio de parentescos.
 */
@Module({
  controllers: [ParentescoController],
  providers: [ParentescoService],
})
export class ParentescoModule {}
