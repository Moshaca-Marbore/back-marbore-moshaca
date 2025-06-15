import { Module } from '@nestjs/common';
import { AlumnoTutorModule } from './modules/alumno-tutor/alumno-tutor.module';
import { AlumnoModule } from './modules/alumno/alumno.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentescoModule } from './modules/catalogos/parentesco/parentesco.module';
import { TipoReporteModule } from './modules/catalogos/tipo-reporte/tipo-reporte.module';
import { CredencialModule } from './modules/credencial/credencial.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { RegistroAccesoModule } from './modules/registro-acceso/registro-acceso.module';
import { ReporteModule } from './modules/reporte/reporte.module';
import { TutorModule } from './modules/tutor/tutor.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    AlumnoModule,
    TutorModule,
    CredencialModule,
    ReporteModule,
    RegistroAccesoModule,
    AlumnoTutorModule,
    ParentescoModule,
    TipoReporteModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
