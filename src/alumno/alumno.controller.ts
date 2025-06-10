import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@ApiTags('Alumnos')
@Controller('alumnos')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo alumno' })
  @ApiResponse({ status: 201, description: 'Alumno creado exitosamente' })
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los alumnos' })
  findAll() {
    return this.alumnoService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Buscar alumnos por nombre' })
  search(@Query('name') name: string) {
    return this.alumnoService.searchByName(name);
  }

  @Get(':boleta')
  @ApiOperation({ summary: 'Obtener un alumno por boleta' })
  findOne(@Param('boleta') boleta: string) {
    return this.alumnoService.findOne(boleta);
  }

  @Put(':boleta')
  @ApiOperation({ summary: 'Actualizar un alumno' })
  update(
    @Param('boleta') boleta: string,
    @Body() updateAlumnoDto: UpdateAlumnoDto,
  ) {
    return this.alumnoService.update(boleta, updateAlumnoDto);
  }

  @Delete(':boleta')
  @ApiOperation({ summary: 'Eliminar un alumno' })
  remove(@Param('boleta') boleta: string) {
    return this.alumnoService.remove(boleta);
  }
}