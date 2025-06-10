import { Injectable } from '@nestjs/common';
import { CreateRegistroAccesoDto } from './dto/create-registro-acceso.dto';
import { UpdateRegistroAccesoDto } from './dto/update-registro-acceso.dto';

@Injectable()
export class RegistroAccesoService {
  create(createRegistroAccesoDto: CreateRegistroAccesoDto) {
    return 'This action adds a new registroAcceso';
  }

  findAll() {
    return `This action returns all registroAcceso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroAcceso`;
  }

  update(id: number, updateRegistroAccesoDto: UpdateRegistroAccesoDto) {
    return `This action updates a #${id} registroAcceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroAcceso`;
  }
}
