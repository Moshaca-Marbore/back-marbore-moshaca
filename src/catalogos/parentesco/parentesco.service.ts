import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParentescoDto } from './dto/create-parentesco.dto';
import { UpdateParentescoDto } from './dto/update-parentesco.dto';

@Injectable()
export class ParentescoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createParentescoDto: CreateParentescoDto) {
    return this.prisma.parentesco.create({ data: createParentescoDto });
  }

  findAll() {
    return this.prisma.parentesco.findMany();
  }

  findOne(id: number) {
    return this.prisma.parentesco.findUnique({ where: { id_parentesco: id } });
  }

  update(id: number, updateParentescoDto: UpdateParentescoDto) {
    return this.prisma.parentesco.update({ where: { id_parentesco: id }, data: updateParentescoDto });
  }

  remove(id: number) {
    return this.prisma.parentesco.delete({ where: { id_parentesco: id } });
  }
}
