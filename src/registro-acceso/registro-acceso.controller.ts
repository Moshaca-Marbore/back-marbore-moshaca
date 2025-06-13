import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Roles } from 'src/auth/roles.decorator';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { FilterRegistroDto } from './dto/filter-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';
import { RegistroAccesoService } from './registro-acceso.service';

/**
 * Controlador de API REST para gestionar registros de acceso.
 * 
 * Requiere autenticación JWT para todas las operaciones.
 * Algunos endpoints requieren rol de administrador.
 */
@Controller('registro-acceso')
@UseGuards(JwtGuard)
export class RegistroAccesoController {
  constructor(private readonly registroAccesoService: RegistroAccesoService) {}

  /**
   * Crea un nuevo registro de acceso.
   * Accesible por cualquier usuario autenticado.
   *
   * @param createRegistroAccesoDto - Datos del registro.
   * @returns El registro creado.
   */
  @Post()
  create(@Body() createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return this.registroAccesoService.create(createRegistroAccesoDto);
  }
  
  /**
   * Obtiene todos los registros de acceso, opcionalmente filtrados.
   * Requiere rol de administrador.
   *
   * @param filterDto - Criterios de filtrado (opcional).
   * @returns Lista de registros.
   */
  @Get()
  @Roles('admin')
  findAll(@Query() filterDto: FilterRegistroDto) {
    return this.registroAccesoService.findAll(filterDto);
  }

  /**
   * Obtiene un registro de acceso por su ID único.
   * Accesible por cualquier usuario autenticado.
   *
   * @param id - ID del registro.
   * @returns El registro encontrado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroAccesoService.findOne(id);
  }

  /**
   * Actualiza un registro de acceso existente.
   * Requiere rol de administrador.
   *
   * @param id - ID del registro a actualizar.
   * @param updateRegistroAccesoDto - Datos parciales para actualizar.
   * @returns El registro actualizado.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegistroAccesoDto: UpdateRegistroAccesoDto,
  ) {
    return this.registroAccesoService.update(id, updateRegistroAccesoDto);
  }

  /**
   * Elimina un registro de acceso.
   * Requiere rol de administrador.
   *
   * @param id - ID del registro a eliminar.
   * @returns El registro eliminado.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroAccesoService.remove(id);
  }
}
