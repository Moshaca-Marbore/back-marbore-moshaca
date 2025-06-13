import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';
import { FilterRegistroDto } from './dto/filter-registro-acceso.dto';

/**
 * Servicio para gestionar registros de acceso al sistema.
 *
 * Permite crear, consultar, actualizar y eliminar registros de acceso,
 * así como aplicar filtros para búsquedas específicas.
 */
@Injectable()
export class RegistroAccesoService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea un nuevo registro de acceso.
   *
   * @param createRegistroAccesoDto - Datos del registro a crear.
   * @returns El registro de acceso creado.
   *
   * @example
   * await create({ id_usuario: 'uuid-123', tipo_acceso: 'LOGIN' });
   */
  create(createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return this.prisma.registroAcceso.create({
      data: {
        ...createRegistroAccesoDto,
        ...(createRegistroAccesoDto.fecha_hora
          ? { fecha_hora: createRegistroAccesoDto.fecha_hora }
          : {}),
      },
    });
  }

  /**
   * Obtiene todos los registros de acceso, opcionalmente filtrados.
   *
   * @param filterDto - Criterios de filtrado (opcional).
   * @returns Lista de registros de acceso.
   *
   * @example
   * await findAll(); // Todos los registros
   * await findAll({ tipo_acceso: 'LOGIN' }); // Solo registros de login
   */
  findAll(filterDto: FilterRegistroDto) {
    return this.prisma.registroAcceso.findMany({
      where: {
        ...filterDto,
      },
    });
  }

  /**
   * Busca un registro de acceso por su ID único.
   *
   * @param id - ID del registro.
   * @returns El registro encontrado o `null` si no existe.
   *
   * @example
   * await findOne('uuid-123');
   */
  findOne(id: string) {
    return this.prisma.registroAcceso.findUnique({
      where: { id_registro: id },
    });
  }

  /**
   * Actualiza un registro de acceso existente.
   *
   * @param id - ID del registro a actualizar.
   * @param updateRegistroAccesoDto - Datos parciales para actualizar.
   * @returns El registro actualizado.
   *
   * @example
   * await update('uuid-123', { tipo_acceso: 'LOGOUT' });
   */
  update(id: string, updateRegistroAccesoDto: UpdateRegistroAccesoDto) {
    return this.prisma.registroAcceso.update({
      where: { id_registro: id },
      data: updateRegistroAccesoDto,
    });
  }

  /**
   * Elimina un registro de acceso.
   *
   * @param id - ID del registro a eliminar.
   * @returns El registro eliminado.
   *
   * @example
   * await remove('uuid-123');
   */
  remove(id: string) {
    return this.prisma.registroAcceso.delete({
      where: { id_registro: id },
    });
  }
}
