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
import { Roles } from 'src/auth/roles.decorator';
import { CredencialService } from './credencial.service';
import { CreateCredencialDto } from './dto/create-credencial.dto';
import { UpdateCredencialDto } from './dto/update-credencial.dto';

/**
 * Controlador de API REST para gestión de credenciales.
 *
 * Requiere autenticación JWT.
 * Endpoints protegidos por roles específicos.
 */
@ApiTags('Credencial')
@Controller('credencial')
@UseGuards(JwtGuard)
export class CredencialController {
  constructor(private readonly credencialService: CredencialService) {}

  /**
   * Crea una nueva credencial.
   * Requiere rol 'alumno'.
   *
   * @param createCredencialDto - Datos de la credencial.
   * @returns Credencial creada.
   */
  @Post()
  @ApiOperation({ summary: 'Crear una nueva credencial' })
  @ApiResponse({ status: 201, description: 'Credencial creada exitosamente' })
  @Roles('alumno')
  create(@Body() createCredencialDto: CreateCredencialDto) {
    return this.credencialService.create(createCredencialDto);
  }

  /**
   * Obtiene todas las credenciales.
   * Requiere rol 'admin'.
   *
   * @returns Lista de credenciales.
   */
  @Get()
  @ApiOperation({ summary: 'Obtener todas las credenciales' })
  @Roles('admin')
  findAll() {
    return this.credencialService.findAll();
  }

  /**
   * Obtiene una credencial por su ID.
   * Requiere rol 'admin' o 'alumno'.
   *
   * @param id - ID de la credencial.
   * @returns Credencial encontrada.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una credencial por ID' })
  @Roles('admin', 'alumno')
  findOne(@Param('id') id: string) {
    return this.credencialService.findOne(id);
  }

  /**
   * Actualiza una credencial existente.
   * Requiere rol 'admin'.
   *
   * @param id - ID de la credencial a actualizar.
   * @param updateCredencialDto - Campos a modificar.
   * @returns Credencial actualizada.
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una credencial' })
  @Roles('admin')
  update(
    @Param('id') id: string,
    @Body() updateCredencialDto: UpdateCredencialDto,
  ) {
    return this.credencialService.update(id, updateCredencialDto);
  }

  /**
   * Elimina una credencial existente.
   * Requiere rol 'admin'.
   *
   * @param id - ID de la credencial a eliminar.
   * @returns Credencial eliminada.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una credencial' })
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.credencialService.remove(id);
  }
}
