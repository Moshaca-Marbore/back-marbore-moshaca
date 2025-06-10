import { Module } from '@nestjs/common';
import { AlumnoTutorService } from './alumno-tutor.service';
import { AlumnoTutorController } from './alumno-tutor.controller';

@Module({
  controllers: [AlumnoTutorController],
  providers: [AlumnoTutorService],
})
export class AlumnoTutorModule {}
