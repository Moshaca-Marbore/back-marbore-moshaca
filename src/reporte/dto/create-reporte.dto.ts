import { StatusReporte } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateReporteDto {
    @IsString()
    @IsNotEmpty()
    id_reporte: string;
    
    @IsString()
    @Length(10,10)
    @IsNotEmpty()
    boleta: string;
    
    @IsString()
    @IsNotEmpty()
    id_tipo_reporte: number;
    
    @IsString()
    @IsNotEmpty()
    motivo: string;
    
    @IsEnum(StatusReporte)
    @IsNotEmpty()
    status: StatusReporte;
    
    @IsDate()
    @IsNotEmpty()
    created_at: Date;
    
    @IsDate()
    @IsNotEmpty()
    updated_at: Date;
}
