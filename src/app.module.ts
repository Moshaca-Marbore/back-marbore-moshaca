import { Module } from '@nestjs/common';
import { AlumnoTutorModule } from './alumno-tutor/alumno-tutor.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentescoModule } from './catalogos/parentesco/parentesco.module';
import { TipoReporteModule } from './catalogos/tipo-reporte/tipo-reporte.module';
import { CredencialModule } from './credencial/credencial.module';
import { PrismaModule } from './prisma/prisma.module';
import { RegistroAccesoModule } from './registro-acceso/registro-acceso.module';
import { ReporteModule } from './reporte/reporte.module';
import { TutorModule } from './tutor/tutor.module';

@Module({
  imports: [PrismaModule, AlumnoModule, TutorModule, CredencialModule, ReporteModule, RegistroAccesoModule, AlumnoTutorModule, ParentescoModule, TipoReporteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
