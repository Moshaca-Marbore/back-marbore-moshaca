import { IsString, Length, IsIn } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(10, 10, { message: 'La boleta debe tener 10 caracteres' })
  id: string;

  @IsIn(['admin', 'alumno'], { message: 'Rol inválido' })
  role: string;
}
