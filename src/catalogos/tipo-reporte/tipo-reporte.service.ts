import { Injectable } from '@nestjs/common';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoReporteService {
  constructor(private prisma: PrismaService) {}

  create(createTipoReporteDto: CreateTipoReporteDto) {
    return this.prisma.tipoReporte.create({ data: createTipoReporteDto });
  }

  findAll() {
    return this.prisma.tipoReporte.findMany();
  }

  findOne(id: number) {
    return this.prisma.tipoReporte.findUnique({
      where: { id_tipo_reporte: id },
    });
  }

  update(id: number, updateTipoReporteDto: UpdateTipoReporteDto) {
    return this.prisma.tipoReporte.update({
      where: { id_tipo_reporte: id },
      data: updateTipoReporteDto,
    });
  }

  remove(id: number) {
    return this.prisma.tipoReporte.delete({ where: { id_tipo_reporte: id } });
  }
}
