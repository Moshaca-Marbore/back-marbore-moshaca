import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CredencialService } from './credencial.service';
import { CreateCredencialDto } from './dto/create-credencial.dto';
import { UpdateCredencialDto } from './dto/update-credencial.dto';

@ApiTags('Credencial')
@Controller('credencial')
export class CredencialController {
  constructor(private readonly credencialService: CredencialService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva credencial' })
  @ApiResponse({ status: 201, description: 'Credencial creada exitosamente' })
  create(@Body() createCredencialDto: CreateCredencialDto) {
    return this.credencialService.create(createCredencialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las credenciales' })
  findAll() {
    return this.credencialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una credencial por ID' })
  findOne(@Param('id') id: string) {
    return this.credencialService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una credencial' })
  update(
    @Param('id') id: string,
    @Body() updateCredencialDto: UpdateCredencialDto,
  ) {
    return this.credencialService.update(id, updateCredencialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una credencial' })
  remove(@Param('id') id: string) {
    return this.credencialService.remove(id);
  }
}
