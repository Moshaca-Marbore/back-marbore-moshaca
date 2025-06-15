import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

/**
 * Servicio para gestionar las operaciones relacionadas con tutores.
 *
 * Proporciona métodos para crear, buscar, actualizar y eliminar tutores,
 * así como para listar todos los tutores registrados.
 */
@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea un nuevo tutor en la base de datos.
   *
   * @param createTutorDto - Datos del tutor a crear.
   * @returns El tutor creado con un ID único generado automáticamente.
   *
   * @example
   * await create({ nombre: "María", especialidad: "Matemáticas" });
   */
  async create(createTutorDto: CreateTutorDto) {
    return this.prisma.tutor.create({
      data: {
        id_tutor: randomUUID(),
        ...createTutorDto,
      },
    });
  }

  /**
   * Obtiene una lista de todos los tutores registrados.
   *
   * @returns Lista de tutores.
   *
   * @example
   * await findAll(); // [{ id_tutor: "uuid-123", nombre: "María" }, ...]
   */
  async findAll() {
    return this.prisma.tutor.findMany();
  }

  /**
   * Busca un tutor por su ID único.
   *
   * @param id - ID del tutor a buscar.
   * @returns El tutor encontrado.
   * @throws NotFoundException Si el tutor no existe.
   *
   * @example
   * await findOne("uuid-123");
   */
  async findOne(id: string) {
    const tutor = await this.prisma.tutor.findUnique({
      where: { id_tutor: id },
    });

    if (!tutor) {
      throw new NotFoundException(`Tutor con ID ${id} no encontrado`);
    }

    return tutor;
  }

  /**
   * Actualiza los datos de un tutor existente.
   *
   * @param id - ID del tutor a actualizar.
   * @param updateTutorDto - Datos parciales para actualizar.
   * @returns El tutor actualizado.
   * @throws NotFoundException Si el tutor no existe.
   *
   * @example
   * await update("uuid-123", { especialidad: "Física" });
   */
  async update(id: string, updateTutorDto: UpdateTutorDto) {
    await this.findOne(id);

    return this.prisma.tutor.update({
      where: { id_tutor: id },
      data: updateTutorDto,
    });
  }

  /**
   * Elimina un tutor de la base de datos.
   *
   * @param id - ID del tutor a eliminar.
   * @returns El tutor eliminado.
   * @throws NotFoundException Si el tutor no existe.
   *
   * @example
   * await remove("uuid-123");
   */
  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.tutor.delete({
      where: { id_tutor: id },
    });
  }
}
