import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoReporteService } from './tipo-reporte.service';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';
import { JwtGuard } from 'src/modules/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/roles.decorator';

/**
 * Controlador de API REST para tipos de reportes académicos.
 *
 * Requiere autenticación JWT y rol de administrador para todas las operaciones.
 */
@Controller('tipo-reporte')
@UseGuards(JwtGuard)
@Roles('admin')
export class TipoReporteController {
  constructor(private readonly tipoReporteService: TipoReporteService) {}

  /**
   * Crea un nuevo tipo de reporte.
   *
   * @param createTipoReporteDto - Datos del tipo de reporte.
   * @returns El tipo de reporte creado.
   *
   * @example
   * await create({ nombre: 'Asesoría', descripcion: 'Solicitud de ayuda académica' });
   */
  @Post()
  create(@Body() createTipoReporteDto: CreateTipoReporteDto) {
    return this.tipoReporteService.create(createTipoReporteDto);
  }

  /**
   * Obtiene todos los tipos de reporte registrados.
   *
   * @returns Lista completa de tipos de reporte.
   *
   * @example
   * await findAll(); // [{ id_tipo_reporte: 1, nombre: 'Incidente' }, ...]
   */
  @Get()
  findAll() {
    return this.tipoReporteService.findAll();
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoReporteService.findOne(+id);
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
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoReporteDto: UpdateTipoReporteDto,
  ) {
    return this.tipoReporteService.update(+id, updateTipoReporteDto);
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoReporteService.remove(+id);
  }
}
