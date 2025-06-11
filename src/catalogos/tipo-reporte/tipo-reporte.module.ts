import { Module } from '@nestjs/common';
import { TipoReporteService } from './tipo-reporte.service';
import { TipoReporteController } from './tipo-reporte.controller';

@Module({
  controllers: [TipoReporteController],
  providers: [TipoReporteService],
})
export class TipoReporteModule {}
