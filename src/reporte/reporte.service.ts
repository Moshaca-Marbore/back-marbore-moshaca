import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Servicio para gestionar reportes académicos.
 *
 * Proporciona métodos para crear, buscar, actualizar y eliminar reportes,
 * así como búsquedas específicas por boleta de alumno.
 */
@Injectable()
export class ReporteService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea un nuevo reporte académico.
   *
   * @param createReporteDto - Datos del reporte a crear.
   * @returns El reporte creado.
   *
   * @example
   * await create({ boleta: '20230001', motivo: 'Asesoría', status: 'Pendiente' });
   */
  create(createReporteDto: CreateReporteDto) {
    return this.prisma.reporte.create({
      data: {
        ...createReporteDto,
        ...(createReporteDto.status ? { status: createReporteDto.status } : {}),
      },
    });
  }

  /**
   * Obtiene todos los reportes registrados.
   *
   * @returns Lista de reportes.
   *
   * @example
   * await findAll(); // [{ id_reporte: 'uuid-123', boleta: '20230001', ... }]
   */
  findAll() {
    return this.prisma.reporte.findMany();
  }

  /**
   * Busca un reporte por su ID único.
   *
   * @param id - ID del reporte.
   * @returns El reporte encontrado o `null` si no existe.
   *
   * @example
   * await findOne('uuid-123');
   */
  findOne(id: string) {
    return this.prisma.reporte.findUnique({
      where: { id_reporte: id },
    });
  }
  
  /**
   * Busca reportes asociados a una boleta de alumno.
   *
   * @param boleta - Boleta del alumno.
   * @returns Lista de reportes coincidentes.
   *
   * @example
   * await findByBoleta('20230001'); // [reportes del alumno]
   */

  findByBoleta(boleta: string) {
    return this.prisma.reporte.findMany({
      where: { boleta },
    });
  }

  /**
   * Actualiza los datos de un reporte existente.
   *
   * @param id - ID del reporte a actualizar.
   * @param updateReporteDto - Datos parciales para actualizar.
   * @returns El reporte actualizado.
   *
   * @example
   * await update('uuid-123', { status: 'Resuelto' });
   */
  update(id: string, updateReporteDto: UpdateReporteDto) {
    return this.prisma.reporte.update({
      where: { id_reporte: id },
      data: updateReporteDto,
    });
  }

  /**
   * Elimina un reporte de la base de datos.
   *
   * @param id - ID del reporte a eliminar.
   * @returns El reporte eliminado.
   *
   * @example
   * await remove('uuid-123');
   */
  remove(id: string) {
    return this.prisma.reporte.delete({
      where: { id_reporte: id },
    });
  }
}
