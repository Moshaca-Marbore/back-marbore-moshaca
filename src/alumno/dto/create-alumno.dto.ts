import {
  IsString,
  IsNotEmpty,
  Length,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { StatusAlumno } from '@prisma/client';

// Función para mapear valores antiguos a nuevos
export function mapOldStatus(status: string): StatusAlumno {
  if (status === 'NO INSCRITO') return StatusAlumno.NO_INSCRITO;
  return status as StatusAlumno;
}

export class CreateAlumnoDto {
  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  boleta: string;

  @IsString()
  @IsNotEmpty()
  @Length(18, 18)
  curp: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido_paterno: string;

  @IsString()
  @IsOptional()
  apellido_materno?: string;

  @IsString()
  @IsOptional()
  foto?: string;

  @IsEnum(StatusAlumno)
  @IsOptional()
  status?: StatusAlumno;
}
