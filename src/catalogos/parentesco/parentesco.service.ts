import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParentescoDto } from './dto/create-parentesco.dto';
import { UpdateParentescoDto } from './dto/update-parentesco.dto';

/**
 * Servicio para gestionar tipos de parentesco familiar.
 *
 * Permite administrar el catálogo de relaciones familiares (ej: padre, madre, tutor).
 */
@Injectable()
export class ParentescoService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea un nuevo tipo de parentesco.
   *
   * @param createParentescoDto - Datos del parentesco a registrar.
   * @returns El parentesco creado.
   *
   * @example
   * await create({ nombre: 'Abuelo/a', clave: 'ABU' });
   */
  create(createParentescoDto: CreateParentescoDto) {
    return this.prisma.parentesco.create({ data: createParentescoDto });
  }

  /**
   * Obtiene todos los tipos de parentesco registrados.
   *
   * @returns Lista completa de parentescos.
   *
   * @example
   * await findAll(); // [{ id_parentesco: 1, nombre: 'Padre', clave: 'PAD' }, ...]
   */
  findAll() {
    return this.prisma.parentesco.findMany();
  }

  /**
   * Busca un parentesco por su ID.
   *
   * @param id - ID numérico del parentesco.
   * @returns El parentesco encontrado.
   *
   * @example
   * await findOne(1);
   */
  findOne(id: number) {
    return this.prisma.parentesco.findUnique({ where: { id_parentesco: id } });
  }

  /**
   * Actualiza un tipo de parentesco existente.
   *
   * @param id - ID del parentesco a modificar.
   * @param updateParentescoDto - Campos a actualizar.
   * @returns El parentesco actualizado.
   *
   * @example
   * await update(1, { nombre: 'Abuelo/a materno/a' });
   */
  update(id: number, updateParentescoDto: UpdateParentescoDto) {
    return this.prisma.parentesco.update({
      where: { id_parentesco: id },
      data: updateParentescoDto,
    });
  }

  /**
   * Elimina un tipo de parentesco del catálogo.
   *
   * @param id - ID del parentesco a eliminar.
   * @returns El parentesco eliminado.
   *
   * @example
   * await remove(1);
   */
  remove(id: number) {
    return this.prisma.parentesco.delete({ where: { id_parentesco: id } });
  }
}
