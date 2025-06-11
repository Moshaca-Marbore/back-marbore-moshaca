import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCredencialDto } from './dto/create-credencial.dto';
import { UpdateCredencialDto } from './dto/update-credencial.dto';
import * as crypto from 'crypto';

@Injectable()
export class CredencialService {
  constructor(private prisma: PrismaService) {}

  async create(createCredencialDto: CreateCredencialDto) {
    const { boleta, ...data } = createCredencialDto;
    return this.prisma.credencial.create({
      data: {
        id_credencial: crypto.randomUUID(),
        ...data,
        fecha_emision: new Date(),
        alumno: {
          connect: { boleta }
        }
      },
      include: {
        alumno: true
      }
    });
  }

  async findAll() {
    return this.prisma.credencial.findMany({
      include: {
        alumno: true
      }
    });
  }

  async findOne(id: string) {
    const credencial = await this.prisma.credencial.findUnique({
      where: { id_credencial: id },
      include: {
        alumno: true
      }
    });

    if (!credencial) {
      throw new NotFoundException(`Credencial con ID ${id} no encontrada`);
    }

    return credencial;
  }

  async update(id: string, updateCredencialDto: UpdateCredencialDto) {
    await this.findOne(id); // Verifica existencia
    
    return this.prisma.credencial.update({
      where: { id_credencial: id },
      data: updateCredencialDto
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verifica existencia
    return this.prisma.credencial.delete({
      where: { id_credencial: id }
    });
  }
}
