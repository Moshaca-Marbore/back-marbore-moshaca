import { PartialType } from '@nestjs/swagger';
import { CreateParentescoDto } from './create-parentesco.dto';

export class UpdateParentescoDto extends PartialType(CreateParentescoDto) {}
