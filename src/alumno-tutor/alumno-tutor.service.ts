import { Injectable } from '@nestjs/common';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterAlumnoTutorDto } from './dto/filter-alumno-tutor.dbo';

@Injectable()
export class AlumnoTutorService {
  constructor(private prisma: PrismaService) {}

  create(createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return this.prisma.alumnoTutor.create({
      data: createAlumnoTutorDto,
    });
  }

  findAll(filterDto: FilterAlumnoTutorDto) {
    return this.prisma.alumnoTutor.findMany({
      where: {
        ...filterDto,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.alumnoTutor.findUnique({
      where: { id_relacion: id },
      include: {
        tutor: true,
        alumno: true,
        parentesco: true,
      },
    });
  }

  update(id: string, updateAlumnoTutorDto: UpdateAlumnoTutorDto) {
    return this.prisma.alumnoTutor.update({
      where: { id_relacion: id },
      data: updateAlumnoTutorDto,
    });
  }

  remove(id: string) {
    return this.prisma.alumnoTutor.delete({
      where: { id_relacion: id },
    });
  }
}
