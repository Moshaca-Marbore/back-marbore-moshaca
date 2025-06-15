import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';

/**
 * Servicio para gestionar los tipos de reportes académicos.
 *
 * Permite administrar el catálogo de clasificaciones para reportes
 * (ej: 'Asesoría', 'Incidente', 'Solicitud').
 */
@Injectable()
export class TipoReporteService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crea un nuevo tipo de reporte.
   *
   * @param createTipoReporteDto - Datos del tipo de reporte.
   * @returns El tipo de reporte creado.
   *
   * @example
   * await create({ nombre: 'Asesoría', descripcion: 'Solicitud de ayuda académica' });
   */
  create(createTipoReporteDto: CreateTipoReporteDto) {
    return this.prisma.tipoReporte.create({ data: createTipoReporteDto });
  }

  /**
   * Obtiene todos los tipos de reporte registrados.
   *
   * @returns Lista completa de tipos de reporte.
   *
   * @example
   * await findAll(); // [{ id_tipo_reporte: 1, nombre: 'Incidente' }, ...]
   */
  findAll() {
    return this.prisma.tipoReporte.findMany();
  }

  /**
   * Busca un tipo de reporte por su ID.
   *
   * @param id - ID numérico del tipo de reporte.
   * @returns El tipo de reporte encontrado.
   *
   * @example
   * await findOne(1);
   */
  findOne(id: number) {
    return this.prisma.tipoReporte.findUnique({
      where: { id_tipo_reporte: id },
    });
  }

  /**
   * Actualiza un tipo de reporte existente.
   *
   * @param id - ID del tipo de reporte.
   * @param updateTipoReporteDto - Campos a actualizar.
   * @returns El tipo de reporte actualizado.
   *
   * @example
   * await update(1, { descripcion: 'Problema académico urgente' });
   */
  update(id: number, updateTipoReporteDto: UpdateTipoReporteDto) {
    return this.prisma.tipoReporte.update({
      where: { id_tipo_reporte: id },
      data: updateTipoReporteDto,
    });
  }

  /**
   * Elimina un tipo de reporte del catálogo.
   *
   * @param id - ID del tipo de reporte.
   * @returns El tipo de reporte eliminado.
   *
   * @example
   * await remove(1);
   */
  remove(id: number) {
    return this.prisma.tipoReporte.delete({ where: { id_tipo_reporte: id } });
  }
}
