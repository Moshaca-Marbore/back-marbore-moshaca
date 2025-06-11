import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { FilterRegistroDto } from './dto/filter-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';
import { RegistroAccesoService } from './registro-acceso.service';

@Controller('registro-acceso')
export class RegistroAccesoController {
  constructor(private readonly registroAccesoService: RegistroAccesoService) {}

  @Post()
  create(@Body() createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return this.registroAccesoService.create(createRegistroAccesoDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterRegistroDto) {
    return this.registroAccesoService.findAll(filterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroAccesoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroAccesoDto: UpdateRegistroAccesoDto) {
    return this.registroAccesoService.update(id, updateRegistroAccesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroAccesoService.remove(id);
  }
}
