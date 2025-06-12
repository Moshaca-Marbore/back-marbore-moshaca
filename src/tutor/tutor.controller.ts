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

@ApiTags('Tutores')
@Controller('tutores')
@UseGuards(JwtGuard)
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tutor' })
  @ApiResponse({ status: 201, description: 'Tutor creado exitosamente' })
  @Roles('admin')
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tutores' })
  @Roles('admin')
  findAll() {
    return this.tutorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tutor por ID' })
  @Roles('admin', 'alumno')
  findOne(@Param('id') id: string) {
    return this.tutorService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un tutor' })
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorService.update(id, updateTutorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tutor' })
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.tutorService.remove(id);
  }
}
