import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AlumnoTutorService } from './alumno-tutor.service';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';
import { FilterAlumnoTutorDto } from './dto/filter-alumno-tutor.dbo';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';

/**
 * Controlador de API REST para relaciones alumno-tutor.
 *
 * Requiere autenticación JWT y rol de administrador para todas las operaciones.
 */
@Controller('alumno-tutor')
@UseGuards(JwtGuard)
@Roles('admin')
export class AlumnoTutorController {
  constructor(private readonly alumnoTutorService: AlumnoTutorService) {}

  /**
   * Crea una nueva relación alumno-tutor.
   *
   * @param createAlumnoTutorDto - Datos de la relación.
   * @returns Relación creada.
   */
  @Post()
  create(@Body() createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return this.alumnoTutorService.create(createAlumnoTutorDto);
  }

  /**
   * Obtiene todas las relaciones alumno-tutor, opcionalmente filtradas.
   *
   * @param filterDto - Criterios de filtrado (opcional).
   * @returns Lista de relaciones.
   */
  @Get()
  findAll(@Query() filterDto: FilterAlumnoTutorDto) {
    return this.alumnoTutorService.findAll(filterDto);
  }

  /**
   * Obtiene una relación específica por su ID.
   *
   * Incluye datos completos del tutor, alumno y parentesco asociados.
   *
   * @param id - ID de la relación.
   * @returns La relación con todos sus datos asociados.
   *
   * @example
   * await findOne('uuid-relacion');
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoTutorService.findOne(id);
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
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlumnoTutorDto: UpdateAlumnoTutorDto,
  ) {
    return this.alumnoTutorService.update(id, updateAlumnoTutorDto);
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoTutorService.remove(id);
  }
}
