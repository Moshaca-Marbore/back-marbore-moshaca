import { PartialType } from '@nestjs/swagger';
import { CreateTipoReporteDto } from './create-tipo-reporte.dto';

export class UpdateTipoReporteDto extends PartialType(CreateTipoReporteDto) {}
