import { MetodoAcceso, TipoAcceso } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateRegistroAccesoDto {
    
    @IsString()
    @IsNotEmpty()
    id_registro: string;
    
    @IsString()
    @Length(10,10)
    @IsNotEmpty()
    boleta: string;
    
    @IsEnum(TipoAcceso)
    @IsNotEmpty()
    tipo_acceso: TipoAcceso;
    
    @IsEnum(MetodoAcceso)
    @IsNotEmpty()
    metodo_acceso: MetodoAcceso;
    
    @IsDate()
    @IsNotEmpty()
    fecha_hora: Date;
}
