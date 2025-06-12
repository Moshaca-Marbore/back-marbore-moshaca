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
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Alumnos')
@Controller('alumnos')
@UseGuards(JwtGuard, RolesGuard)
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo alumno' })
  @ApiResponse({ status: 201, description: 'Alumno creado exitosamente' })
  @Roles('admin')
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los alumnos' })
  @Roles('admin', 'alumno')
  findAll() {
    return this.alumnoService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Buscar alumnos por nombre' })
  @Roles('admin', 'alumno')
  search(@Query('name') name: string) {
    return this.alumnoService.searchByName(name);
  }

  @Get(':boleta')
  @ApiOperation({ summary: 'Obtener un alumno por boleta' })
  @Roles('admin', 'alumno')
  findOne(@Param('boleta') boleta: string) {
    return this.alumnoService.findOne(boleta);
  }

  @Put(':boleta')
  @ApiOperation({ summary: 'Actualizar un alumno' })
  @Roles('admin')
  update(
    @Param('boleta') boleta: string,
    @Body() updateAlumnoDto: UpdateAlumnoDto,
  ) {
    return this.alumnoService.update(boleta, updateAlumnoDto);
  }

  @Delete(':boleta')
  @ApiOperation({ summary: 'Eliminar un alumno' })
  @Roles('admin')
  remove(@Param('boleta') boleta: string) {
    return this.alumnoService.remove(boleta);
  }
}
