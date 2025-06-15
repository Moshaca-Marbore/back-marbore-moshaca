import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { ReporteService } from './reporte.service';
import { JwtGuard } from 'src/modules/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/roles.decorator';

/**
 * Controlador de API REST para gestionar reportes académicos.
 *
 * Requiere autenticación JWT y rol 'admin' para todas las operaciones.
 */
@Controller('reporte')
@UseGuards(JwtGuard)
@Roles('admin')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  /**
   * Crea un nuevo reporte.
   *
   * @param createReporteDto - Datos del reporte.
   * @returns El reporte creado.
   */
  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteService.create(createReporteDto);
  }

  /**
   * Obtiene todos los reportes.
   *
   * @returns Lista de reportes.
   */
  @Get()
  findAll() {
    return this.reporteService.findAll();
  }

  /**
   * Obtiene un reporte por su ID.
   *
   * @param id - ID del reporte.
   * @returns El reporte encontrado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteService.findOne(id);
  }

  /**
   * Obtiene todos los reportes por boleta de alumno.
   *
   * @param boleta - Boleta del alumno.
   * @returns Lista de reportes coincidentes.
   */
  @Get('boleta/:boleta')
  findByBoleta(@Param('boleta') boleta: string) {
    return this.reporteService.findByBoleta(boleta);
  }

  /**
   * Actualiza un reporte existente.
   *
   * @param id - ID del reporte a actualizar.
   * @param updateReporteDto - Datos parciales para actualizar.
   * @returns El reporte actualizado.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reporteService.update(id, updateReporteDto);
  }

  /**
   * Elimina un reporte.
   *
   * @param id - ID del reporte a eliminar.
   * @returns El reporte eliminado.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteService.remove(id);
  }
}
