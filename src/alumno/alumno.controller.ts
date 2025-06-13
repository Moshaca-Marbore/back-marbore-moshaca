import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

/**
 * Controlador de API REST para gestionar alumnos.
 *
 * Requiere autenticación JWT y maneja permisos basados en roles.
 * Proporciona endpoints para CRUD de alumnos y búsqueda por nombre.
 */
@ApiTags('Alumnos')
@Controller('alumnos')
@UseGuards(JwtGuard, RolesGuard)
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }

  /**
   * Crea un nuevo alumno.
   * Solo accesible por usuarios con rol 'admin'.
   *
   * @param createAlumnoDto - Datos del alumno a crear.
   * @returns El alumno creado.
   */
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo alumno' })
  @ApiResponse({ status: 201, description: 'Alumno creado exitosamente' })
  @Roles('admin')
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  /**
   * Obtiene una lista de todos los alumnos.
   * Accesible por usuarios con roles 'admin' y 'alumno'.
   *
   * @returns Lista de alumnos.
   */
  @Get()
  @ApiOperation({ summary: 'Obtener todos los alumnos' })
  @Roles('admin', 'alumno')
  findAll() {
    return this.alumnoService.findAll();
  }

  /**
   * Busca alumnos por nombre.
   * Accesible por usuarios con roles 'admin' y 'alumno'.
   *
   * @param name - Término de búsqueda (puede ser parte del nombre o apellido).
   * @returns Lista de alumnos que coinciden con la búsqueda.
   */
  @Get('search')
  @ApiOperation({ summary: 'Buscar alumnos por nombre' })
  @Roles('admin', 'alumno')
  search(@Query('name') name: string) {
    return this.alumnoService.searchByName(name);
  }

  /**
   * Obtiene un alumno por su boleta.
   * Accesible por usuarios con roles 'admin' y 'alumno'.
   *
   * @param boleta - Boleta del alumno a buscar.
   * @returns El alumno encontrado.
   */
  @Get(':boleta')
  @ApiOperation({ summary: 'Obtener un alumno por boleta' })
  @Roles('admin', 'alumno')
  findOne(@Param('boleta') boleta: string) {
    return this.alumnoService.findOne(boleta);
  }

  /**
   * Actualiza los datos de un alumno existente.
   * Solo accesible por usuarios con rol 'admin'.
   *
   * @param boleta - Boleta del alumno a actualizar.
   * @param updateAlumnoDto - Datos parciales para actualizar.
   * @returns El alumno actualizado.
   */
  @Put(':boleta')
  @ApiOperation({ summary: 'Actualizar un alumno' })
  @Roles('admin')
  update(
    @Param('boleta') boleta: string,
    @Body() updateAlumnoDto: UpdateAlumnoDto,
  ) {
    return this.alumnoService.update(boleta, updateAlumnoDto);
  }

  /**
   * Elimina un alumno de la base de datos.
   * Solo accesible por usuarios con rol 'admin'.
   *
   * @param boleta - Boleta del alumno a eliminar.
   * @returns El alumno eliminado.
   */
  @Delete(':boleta')
  @ApiOperation({ summary: 'Eliminar un alumno' })
  @Roles('admin')
  remove(@Param('boleta') boleta: string) {
    return this.alumnoService.remove(boleta);
  }
}
