import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateParentescoDto {
    @IsNumber()
    @IsNotEmpty()
    id_parentesco: number;
    
    @IsString()
    @IsNotEmpty()
    nombre_parentesco: string;
    
    @IsString()
    @IsNotEmpty()
    created_at: Date;
    
    @IsString()
    @IsNotEmpty()
    updated_at: Date;
}
