import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { TutorService } from './tutor.service';

/**
 * Controlador de API REST para gestionar tutores.
 *
 * Requiere autenticación JWT y maneja permisos basados en roles.
 * Endpoints disponibles para CRUD de tutores.
 */
@ApiTags('Tutores')
@Controller('tutores')
@UseGuards(JwtGuard)
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  /**
   * Crea un nuevo tutor.
   * Solo accesible por usuarios con rol 'admin'.
   *
   * @param createTutorDto - Datos del tutor a crear.
   * @returns El tutor creado.
   */
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tutor' })
  @ApiResponse({ status: 201, description: 'Tutor creado exitosamente' })
  @Roles('admin')
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  /**
   * Obtiene todos los tutores.
   * Solo accesible por 'admin'.
   *
   * @returns Lista de tutores.
   */
  @Get()
  @ApiOperation({ summary: 'Obtener todos los tutores' })
  @Roles('admin')
  findAll() {
    return this.tutorService.findAll();
  }

  /**
   * Obtiene un tutor por su ID.
   * Accesible por 'admin' y 'alumno'.
   *
   * @param id - ID del tutor.
   * @returns El tutor encontrado.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tutor por ID' })
  @Roles('admin', 'alumno')
  findOne(@Param('id') id: string) {
    return this.tutorService.findOne(id);
  }

  /**
   * Actualiza un tutor existente.
   * Solo accesible por 'admin'.
   *
   * @param id - ID del tutor a actualizar.
   * @param updateTutorDto - Datos parciales para actualizar.
   * @returns El tutor actualizado.
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un tutor' })
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorService.update(id, updateTutorDto);
  }

  /**
   * Elimina un tutor.
   * Solo accesible por 'admin'.
   *
   * @param id - ID del tutor a eliminar.
   * @returns El tutor eliminado.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tutor' })
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.tutorService.remove(id);
  }
}
