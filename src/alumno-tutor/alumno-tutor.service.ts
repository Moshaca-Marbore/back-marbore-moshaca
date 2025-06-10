import { Injectable } from '@nestjs/common';
import { CreateAlumnoTutorDto } from './dto/create-alumno-tutor.dto';
import { UpdateAlumnoTutorDto } from './dto/update-alumno-tutor.dto';

@Injectable()
export class AlumnoTutorService {
  create(createAlumnoTutorDto: CreateAlumnoTutorDto) {
    return 'This action adds a new alumnoTutor';
  }

  findAll() {
    return `This action returns all alumnoTutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnoTutor`;
  }

  update(id: number, updateAlumnoTutorDto: UpdateAlumnoTutorDto) {
    return `This action updates a #${id} alumnoTutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoTutor`;
  }
}
