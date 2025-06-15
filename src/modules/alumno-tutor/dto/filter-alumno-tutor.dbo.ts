import { StatusGeneral } from '@prisma/client';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class FilterAlumnoTutorDto {
  @IsOptional()
  @IsString()
  @Length(10, 10)
  boleta?: string;

  @IsOptional()
  @IsString()
  @Length(36, 36)
  id_tutor?: string;

  @IsOptional()
  @IsNumber()
  id_parentesco?: number;

  @IsOptional()
  @IsNumber()
  es_contacto_principal?: number;

  @IsOptional()
  @IsEnum(StatusGeneral)
  status?: StatusGeneral;
}
