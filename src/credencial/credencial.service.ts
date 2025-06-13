import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCredencialDto } from './dto/create-credencial.dto';
import { UpdateCredencialDto } from './dto/update-credencial.dto';

/**
 * Servicio para gestionar credenciales de alumnos.
 *
 * Proporciona operaciones CRUD para credenciales, incluyendo
 * asociación automática con alumnos mediante boleta.
 */
@Injectable()
export class CredencialService {
  constructor(private prisma: PrismaService) {}
  
  /**
   * Crea una nueva credencial asociada a un alumno.
   *
   * Genera automáticamente un ID único y registra la fecha de emisión.
   *
   * @param createCredencialDto - Datos de la credencial y boleta del alumno.
   * @returns La credencial creada con datos del alumno asociado.
   *
   * @example
   * await create({
   *   boleta: '20230001',
   *   tipo: 'ACCESO',
   *   vigencia: 365
   * });
   */
  async create(createCredencialDto: CreateCredencialDto) {
    const { boleta, ...data } = createCredencialDto;
    return this.prisma.credencial.create({
      data: {
        id_credencial: randomUUID(),
        ...data,
        fecha_emision: new Date(),
        alumno: {
          connect: { boleta },
        },
      },
      include: {
        alumno: true,
      },
    });
  }
  
  /**
   * Obtiene todas las credenciales registradas.
   *
   * @returns Lista de credenciales con información de alumnos asociados.
   *
   * @example
   * await findAll(); // [{id_credencial: 'uuid', alumno: {nombre: '...'}, ...}]
   */
  async findAll() {
    return this.prisma.credencial.findMany({
      include: {
        alumno: true,
      },
    });
  }
  
  /**
   * Busca una credencial por su ID único.
   *
   * @param id - ID de la credencial.
   * @returns La credencial con datos del alumno asociado.
   * @throws NotFoundException Si la credencial no existe.
   *
   * @example
   * await findOne('uuid-123');
   */
  async findOne(id: string) {
    const credencial = await this.prisma.credencial.findUnique({
      where: { id_credencial: id },
      include: {
        alumno: true,
      },
    });

    if (!credencial) {
      throw new NotFoundException(`Credencial con ID ${id} no encontrada`);
    }

    return credencial;
  }
  
  /**
   * Actualiza los datos de una credencial existente.
   *
   * @param id - ID de la credencial a actualizar.
   * @param updateCredencialDto - Campos a modificar.
   * @returns La credencial actualizada.
   * @throws NotFoundException Si la credencial no existe.
   *
   * @example
   * await update('uuid-123', { vigencia: 180 });
   */
  async update(id: string, updateCredencialDto: UpdateCredencialDto) {
    await this.findOne(id); // Verifica existencia

    return this.prisma.credencial.update({
      where: { id_credencial: id },
      data: updateCredencialDto,
    });
  }
  
  /**
   * Elimina una credencial existente.
   *
   * @param id - ID de la credencial a eliminar.
   * @returns La credencial eliminada.
   * @throws NotFoundException Si la credencial no existe.
   *
   * @example
   * await remove('uuid-123');
   */
  async remove(id: string) {
    await this.findOne(id); // Verifica existencia
    return this.prisma.credencial.delete({
      where: { id_credencial: id },
    });
  }
}
