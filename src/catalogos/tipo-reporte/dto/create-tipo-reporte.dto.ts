import { GravedadReporte } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoReporteDto {
    @IsNumber()
    @IsNotEmpty()
    id_tipo_reporte: number;

    @IsString()
    @IsNotEmpty()
    nombre_tipo: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsEnum(GravedadReporte)
    @IsNotEmpty()
    gravedad: GravedadReporte;

    @IsDate()
    @IsNotEmpty()
    created_at: Date;

    @IsDate()
    @IsNotEmpty()
    updated_at: Date;
}
