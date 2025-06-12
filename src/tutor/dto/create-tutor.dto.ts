import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateTutorDto {
  @ApiProperty({
    description: 'Nombre del tutor',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Apellido paterno del tutor',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty()
  apellido_paterno: string;

  @ApiProperty({
    description: 'Apellido materno del tutor',
    example: 'López',
    required: false,
  })
  @IsString()
  @IsOptional()
  apellido_materno?: string;

  @ApiProperty({
    description: 'Teléfono del tutor',
    example: '+525512345678',
    required: false,
  })
  @IsPhoneNumber()
  @IsOptional()
  telefono?: string;

  @ApiProperty({
    description: 'Email del tutor',
    example: 'juan.perez@example.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Dirección del tutor',
    example: 'Calle Falsa 123',
    required: false,
  })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({
    description: 'URL de la foto del tutor',
    example: 'https://example.com/foto.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  foto?: string;
}
