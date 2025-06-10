import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoTutorService } from './alumno-tutor.service';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';

@Controller('alumno-tutor')
export class AlumnoTutorController {
  constructor(private readonly alumnoTutorService: AlumnoTutorService) {}

  @Post()
  create(@Body() createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return this.alumnoTutorService.create(createAlumnoTutorDto);
  }

  @Get()
  findAll() {
    return this.alumnoTutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoTutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoTutorDto: UpdateAlumnoTutorDto) {
    return this.alumnoTutorService.update(+id, updateAlumnoTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoTutorService.remove(+id);
  }
}
