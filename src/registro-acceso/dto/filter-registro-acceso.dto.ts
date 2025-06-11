import { MetodoAcceso, TipoAcceso } from '@prisma/client';
import { IsEnum, IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class FilterRegistroDto {
  @IsOptional()
  @IsUUID()
  id_registro?: string;

  @IsOptional()
  @IsString()
  @Length(10,10)
  boleta?: string;

  @IsOptional()
  @IsEnum(TipoAcceso)
  tipo_acceso?: TipoAcceso;

  @IsOptional()
  @IsEnum(MetodoAcceso)
  metodo_acceso?: MetodoAcceso;
}