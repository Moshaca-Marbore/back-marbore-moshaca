import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoTutorDto } from './create-alumno-tutor.dto';

export class UpdateAlumnoTutorDto extends PartialType(CreateAlumnoTutorDto) {}
