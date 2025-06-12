import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentescoService } from './parentesco.service';
import { CreateParentescoDto } from './dto/create-parentesco.dto';
import { UpdateParentescoDto } from './dto/update-parentesco.dto';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';

@Controller('parentesco')
@UseGuards(JwtGuard)
@Roles('admin')
export class ParentescoController {
  constructor(private readonly parentescoService: ParentescoService) {}

  @Post()
  create(@Body() createParentescoDto: CreateParentescoDto) {
    return this.parentescoService.create(createParentescoDto);
  }

  @Get()
  findAll() {
    return this.parentescoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentescoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParentescoDto: UpdateParentescoDto,
  ) {
    return this.parentescoService.update(+id, updateParentescoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentescoService.remove(+id);
  }
}
