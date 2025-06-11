import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  async create(createTutorDto: CreateTutorDto) {
    return this.prisma.tutor.create({
      data: {
        id_tutor: randomUUID(),
        ...createTutorDto
      }
    });
  }

  async findAll() {
    return this.prisma.tutor.findMany();
  }

  async findOne(id: string) {
    const tutor = await this.prisma.tutor.findUnique({
      where: { id_tutor: id }
    });

    if (!tutor) {
      throw new NotFoundException(`Tutor con ID ${id} no encontrado`);
    }

    return tutor;
  }

  async update(id: string, updateTutorDto: UpdateTutorDto) {
    await this.findOne(id);
    
    return this.prisma.tutor.update({
      where: { id_tutor: id },
      data: updateTutorDto
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.tutor.delete({
      where: { id_tutor: id }
    });
  }
}
