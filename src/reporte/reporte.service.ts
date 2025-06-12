import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReporteService {
  constructor(private prisma: PrismaService) {}

  create(createReporteDto: CreateReporteDto) {
    return this.prisma.reporte.create({
      data: {
        ...createReporteDto,
        ...(createReporteDto.status ? { status: createReporteDto.status } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.reporte.findMany();
  }

  findOne(id: string) {
    return this.prisma.reporte.findUnique({
      where: { id_reporte: id },
    });
  }

  findByBoleta(boleta: string) {
    return this.prisma.reporte.findMany({
      where: { boleta },
    });
  }

  update(id: string, updateReporteDto: UpdateReporteDto) {
    return this.prisma.reporte.update({
      where: { id_reporte: id },
      data: updateReporteDto,
    });
  }

  remove(id: string) {
    return this.prisma.reporte.delete({
      where: { id_reporte: id },
    });
  }
}
