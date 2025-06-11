import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';
import { FilterRegistroDto } from './dto/filter-registro-acceso.dto';

@Injectable()
export class RegistroAccesoService {
  constructor(private prisma: PrismaService) { }

  create(createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return this.prisma.registroAcceso.create({
      data: {
        ...createRegistroAccesoDto,
        ...(createRegistroAccesoDto.fecha_hora
          ? { fecha_hora: createRegistroAccesoDto.fecha_hora }
          : {})
      },
    });
  }

  findAll(filterDto: FilterRegistroDto) {
    return this.prisma.registroAcceso.findMany({
      where: {
        ...filterDto,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.registroAcceso.findUnique({
      where: { id_registro: id }
    });
  }

  update(id: string, updateRegistroAccesoDto: UpdateRegistroAccesoDto) {
    return this.prisma.registroAcceso.update({
      where: { id_registro: id },
      data: updateRegistroAccesoDto
    });
  }

  remove(id: string) {
    return this.prisma.registroAcceso.delete({
      where: { id_registro: id }
    });
  }
}
