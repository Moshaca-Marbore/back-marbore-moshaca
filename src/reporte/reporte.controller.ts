import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { ReporteService } from './reporte.service';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';

@Controller('reporte')
@UseGuards(JwtGuard)
@Roles('admin')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteService.create(createReporteDto);
  }

  @Get()
  findAll() {
    return this.reporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteService.findOne(id);
  }

  @Get('boleta/:boleta')
  findByBoleta(@Param('boleta') boleta: string) {
    return this.reporteService.findByBoleta(boleta);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reporteService.update(id, updateReporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteService.remove(id);
  }
}
