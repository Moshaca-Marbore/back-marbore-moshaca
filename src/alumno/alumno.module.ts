import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';

/**
 * Módulo de NestJS que agrupa las funcionalidades relacionadas con alumnos.
 *
 * Define las dependencias del controlador y servicio de alumnos.
 */
@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}
