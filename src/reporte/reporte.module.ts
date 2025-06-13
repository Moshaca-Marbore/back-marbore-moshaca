import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';

/**
 * Módulo de NestJS para gestionar reportes académicos.
 *
 * Agrupa el controlador y servicio de reportes, junto con sus dependencias.
 */
@Module({
  controllers: [ReporteController],
  providers: [ReporteService],
})
export class ReporteModule {}
