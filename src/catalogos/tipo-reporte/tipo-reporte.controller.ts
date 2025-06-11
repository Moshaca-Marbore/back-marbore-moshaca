import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoReporteService } from './tipo-reporte.service';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';

@Controller('tipo-reporte')
export class TipoReporteController {
  constructor(private readonly tipoReporteService: TipoReporteService) {}

  @Post()
  create(@Body() createTipoReporteDto: CreateTipoReporteDto) {
    return this.tipoReporteService.create(createTipoReporteDto);
  }

  @Get()
  findAll() {
    return this.tipoReporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoReporteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoReporteDto: UpdateTipoReporteDto) {
    return this.tipoReporteService.update(+id, updateTipoReporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoReporteService.remove(+id);
  }
}
