import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@ApiTags('Tutores')
@Controller('tutores')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tutor' })
  @ApiResponse({ status: 201, description: 'Tutor creado exitosamente' })
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tutores' })
  findAll() {
    return this.tutorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tutor por ID' })
  findOne(@Param('id') id: string) {
    return this.tutorService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un tutor' })
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorService.update(id, updateTutorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tutor' })
  remove(@Param('id') id: string) {
    return this.tutorService.remove(id);
  }
}
