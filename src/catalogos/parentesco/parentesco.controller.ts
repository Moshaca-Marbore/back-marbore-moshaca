import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentescoService } from './parentesco.service';
import { CreateParentescoDto } from './dto/create-parentesco.dto';
import { UpdateParentescoDto } from './dto/update-parentesco.dto';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';

/**
 * Controlador de API REST para el catálogo de parentescos.
 *
 * Requiere autenticación JWT y rol de administrador para todas las operaciones.
 */
@Controller('parentesco')
@UseGuards(JwtGuard)
@Roles('admin')
export class ParentescoController {
  constructor(private readonly parentescoService: ParentescoService) {}

   /**
   * Crea un nuevo tipo de parentesco.
   *
   * @param createParentescoDto - Datos del parentesco.
   * @returns Parentesco creado.
   */
  @Post()
  create(@Body() createParentescoDto: CreateParentescoDto) {
    return this.parentescoService.create(createParentescoDto);
  }

  /**
   * Obtiene todos los tipos de parentesco.
   *
   * @returns Lista de parentescos.
   */
  @Get()
  findAll() {
    return this.parentescoService.findAll();
  }

  /**
   * Obtiene un tipo de parentesco por su ID.
   *
   * @param id - ID del parentesco.
   * @returns Parentesco encontrado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentescoService.findOne(+id);
  }

  /**
   * Actualiza un tipo de parentesco.
   *
   * @param id - ID del parentesco.
   * @param updateParentescoDto - Datos del parentesco.
   * @returns Parentesco actualizado.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParentescoDto: UpdateParentescoDto,
  ) {
    return this.parentescoService.update(+id, updateParentescoDto);
  }

  /**
   * Elimina un tipo de parentesco.
   *
   * @param id - ID del parentesco.
   * @returns Parentesco eliminado.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentescoService.remove(+id);
  }
}
