import { Module } from '@nestjs/common';
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';

/**
 * Módulo de NestJS para gestionar tutores.
 *
 * Agrupa el controlador y servicio de tutores, junto con sus dependencias.
 */
@Module({
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
