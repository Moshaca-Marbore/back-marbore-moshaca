import { Module } from '@nestjs/common';
import { TipoReporteService } from './tipo-reporte.service';
import { TipoReporteController } from './tipo-reporte.controller';

/**
 * Módulo de NestJS para el catálogo de tipos de reportes académicos.
 *
 * Agrupa el controlador y servicio de tipos de reporte.
 */
@Module({
  controllers: [TipoReporteController],
  providers: [TipoReporteService],
})
export class TipoReporteModule {}
