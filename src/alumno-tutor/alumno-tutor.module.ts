import { Module } from '@nestjs/common';
import { AlumnoTutorService } from './alumno-tutor.service';
import { AlumnoTutorController } from './alumno-tutor.controller';

/**
 * Módulo de NestJS para gestionar relaciones alumno-tutor.
 *
 * Agrupa el controlador y servicio de relaciones alumno-tutor.
 */
@Module({
  controllers: [AlumnoTutorController],
  providers: [AlumnoTutorService],
})
export class AlumnoTutorModule {}
