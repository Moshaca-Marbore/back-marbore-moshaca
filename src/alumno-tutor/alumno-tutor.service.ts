import { Injectable } from '@nestjs/common';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterAlumnoTutorDto } from './dto/filter-alumno-tutor.dbo';

/**
 * Servicio para gestionar relaciones alumno-tutor.
 *
 * Permite asociar tutores con alumnos, incluyendo el tipo de parentesco
 * y proporciona métodos para consultar estas relaciones.
 */
@Injectable()
export class AlumnoTutorService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea una nueva relación alumno-tutor.
   *
   * @param createAlumnoTutorDto - Datos de la relación a crear.
   * @returns La relación creada.
   *
   * @example
   * await create({
   *   id_alumno: '20230001',
   *   id_tutor: 'uuid-tutor',
   *   id_parentesco: 1
   * });
   */
  create(createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return this.prisma.alumnoTutor.create({
      data: createAlumnoTutorDto,
    });
  }

  /**
   * Obtiene todas las relaciones alumno-tutor, opcionalmente filtradas.
   *
   * @param filterDto - Criterios de filtrado (opcional).
   * @returns Lista de relaciones.
   *
   * @example
   * await findAll(); // Todas las relaciones
   * await findAll({ id_alumno: '20230001' }); // Relaciones de un alumno específico
   */
  findAll(filterDto: FilterAlumnoTutorDto) {
    return this.prisma.alumnoTutor.findMany({
      where: {
        ...filterDto,
      },
    });
  }

  /**
   * Busca una relación específica por su ID.
   *
   * Incluye datos completos del tutor, alumno y parentesco asociados.
   *
   * @param id - ID de la relación.
   * @returns La relación con todos sus datos asociados.
   *
   * @example
   * await findOne('uuid-relacion');
   */
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

  /**
   * Actualiza una relación alumno-tutor existente.
   *
   * @param id - ID de la relación a actualizar.
   * @param updateAlumnoTutorDto - Campos a modificar.
   * @returns La relación actualizada.
   *
   * @example
   * await update('uuid-relacion', { id_parentesco: 2 });
   */
  update(id: string, updateAlumnoTutorDto: UpdateAlumnoTutorDto) {
    return this.prisma.alumnoTutor.update({
      where: { id_relacion: id },
      data: updateAlumnoTutorDto,
    });
  }

  /**
   * Elimina una relación alumno-tutor.
   *
   * @param id - ID de la relación a eliminar.
   * @returns La relación eliminada.
   *
   * @example
   * await remove('uuid-relacion');
   */
  remove(id: string) {
    return this.prisma.alumnoTutor.delete({
      where: { id_relacion: id },
    });
  }
}
