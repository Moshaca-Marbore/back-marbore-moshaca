import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

/**
 * Servicio para gestionar las operaciones relacionadas con alumnos.
 *
 * Proporciona métodos para crear, buscar, actualizar y eliminar alumnos,
 * así como búsquedas por nombre.
 */
@Injectable()
export class AlumnoService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea un nuevo alumno en la base de datos.
   *
   * @param createAlumnoDto - Datos del alumno a crear.
   * @returns El alumno creado.
   *
   * @example
   * await create({ boleta: '20230001', nombre: 'Juan', apellido_paterno: 'Pérez' });
   */
  async create(createAlumnoDto: CreateAlumnoDto) {
    return this.prisma.alumno.create({
      data: {
        ...createAlumnoDto,
        ...(createAlumnoDto.status ? { status: createAlumnoDto.status } : {}),
      },
    });
  }

  /**
   * Obtiene una lista de todos los alumnos registrados.
   *
   * @returns Lista de alumnos.
   *
   * @example
   * await findAll(); // [{ boleta: '20230001', nombre: 'Juan' }, ...]
   */
  async findAll() {
    return this.prisma.alumno.findMany();
  }

  /**
   * Busca un alumno por su boleta única.
   *
   * @param boleta - Boleta del alumno a buscar.
   * @returns El alumno encontrado.
   * @throws NotFoundException Si el alumno no existe.
   *
   * @example
   * await findOne('20230001');
   */
  async findOne(boleta: string) {
    const alumno = await this.prisma.alumno.findUnique({
      where: { boleta },
    });

    if (!alumno) {
      throw new NotFoundException(`Alumno con boleta ${boleta} no encontrado`);
    }

    return alumno;
  }

  /**
   * Actualiza los datos de un alumno existente.
   *
   * @param boleta - Boleta del alumno a actualizar.
   * @param updateAlumnoDto - Datos parciales para actualizar.
   * @returns El alumno actualizado.
   * @throws NotFoundException Si el alumno no existe.
   *
   * @example
   * await update('20230001', { nombre: 'Juan Carlos' });
   */
  async update(boleta: string, updateAlumnoDto: UpdateAlumnoDto) {
    await this.findOne(boleta);

    return this.prisma.alumno.update({
      where: { boleta },
      data: {
        ...updateAlumnoDto,
        ...(updateAlumnoDto.status !== undefined
          ? { status: { set: updateAlumnoDto.status } }
          : {}),
      },
    });
  }

  /**
   * Elimina un alumno de la base de datos.
   *
   * @param boleta - Boleta del alumno a eliminar.
   * @returns El alumno eliminado.
   * @throws NotFoundException Si el alumno no existe.
   *
   * @example
   * await remove('20230001');
   */
  async remove(boleta: string) {
    await this.findOne(boleta);
    return this.prisma.alumno.delete({
      where: { boleta },
    });
  }

  /**
   * Busca alumnos cuyos nombres o apellidos coincidan con el término proporcionado.
   *
   * @param name - Término de búsqueda (puede ser parte del nombre o apellido).
   * @returns Lista de alumnos que coinciden con la búsqueda.
   *
   * @example
   * await searchByName('Juan'); // [alumnos con 'Juan' en nombre o apellidos]
   */
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
