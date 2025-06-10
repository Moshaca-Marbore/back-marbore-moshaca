import { Module } from '@nestjs/common';
import { TipoReporteController } from './tipo-reporte.controller';
import { TipoReporteService } from './tipo-reporte.service';

@Module({
  controllers: [TipoReporteController],
  providers: [TipoReporteService]
})
export class TipoReporteModule {}
