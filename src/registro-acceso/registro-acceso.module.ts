import { Module } from '@nestjs/common';
import { RegistroAccesoService } from './registro-acceso.service';
import { RegistroAccesoController } from './registro-acceso.controller';

@Module({
  controllers: [RegistroAccesoController],
  providers: [RegistroAccesoService],
})
export class RegistroAccesoModule {}
