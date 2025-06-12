import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { StatusAlumno } from '@prisma/client';

@Injectable()
export class AlumnoService {
  constructor(private prisma: PrismaService) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    return this.prisma.alumno.create({
      data: {
        ...createAlumnoDto,
        // Eliminar el campo status si no viene en el DTO
        ...(createAlumnoDto.status ? { status: createAlumnoDto.status } : {}),
      },
    });
  }
  async findAll() {
    return this.prisma.alumno.findMany();
  }

  async findOne(boleta: string) {
    const alumno = await this.prisma.alumno.findUnique({
      where: { boleta },
    });

    if (!alumno) {
      throw new NotFoundException(`Alumno con boleta ${boleta} no encontrado`);
    }

    return alumno;
  }

  async update(boleta: string, updateAlumnoDto: UpdateAlumnoDto) {
    await this.findOne(boleta);

    return this.prisma.alumno.update({
      where: { boleta },
      data: {
        ...updateAlumnoDto,
        // Manejar el campo status de forma consistente
        ...(updateAlumnoDto.status !== undefined
          ? { status: { set: updateAlumnoDto.status } }
          : {}),
      },
    });
  }

  async remove(boleta: string) {
    await this.findOne(boleta);
    return this.prisma.alumno.delete({
      where: { boleta },
    });
  }

  async searchByName(name: string) {
    return this.prisma.alumno.findMany({
      where: {
        OR: [
          { nombre: { contains: name } },
          { apellido_paterno: { contains: name } },
          { apellido_materno: { contains: name } },
        ],
      },
    });
  }
}
