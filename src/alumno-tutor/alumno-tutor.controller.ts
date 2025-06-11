import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AlumnoTutorService } from './alumno-tutor.service';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';
import { FilterAlumnoTutorDto } from './dto/filter-alumno-tutor.dbo';

@Controller('alumno-tutor')
export class AlumnoTutorController {
  constructor(private readonly alumnoTutorService: AlumnoTutorService) {}

  @Post()
  create(@Body() createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return this.alumnoTutorService.create(createAlumnoTutorDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterAlumnoTutorDto) {
    return this.alumnoTutorService.findAll(filterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoTutorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoTutorDto: UpdateAlumnoTutorDto) {
    return this.alumnoTutorService.update(id, updateAlumnoTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoTutorService.remove(id);
  }
}
