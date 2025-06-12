import {
  IsString,
  IsNotEmpty,
  Length,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateCredencialDto {
  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  boleta: string;

  @IsString()
  @IsOptional()
  codigo_qr?: string;

  @IsString()
  @IsOptional()
  foto?: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_vencimiento: Date;
}
