import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroAccesoService } from './registro-acceso.service';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';

@Controller('registro-acceso')
export class RegistroAccesoController {
  constructor(private readonly registroAccesoService: RegistroAccesoService) {}

  @Post()
  create(@Body() createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return this.registroAccesoService.create(createRegistroAccesoDto);
  }

  @Get()
  findAll() {
    return this.registroAccesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroAccesoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroAccesoDto: UpdateRegistroAccesoDto) {
    return this.registroAccesoService.update(+id, updateRegistroAccesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroAccesoService.remove(+id);
  }
}
