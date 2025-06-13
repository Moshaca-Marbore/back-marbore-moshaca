import { Module } from '@nestjs/common';
import { RegistroAccesoService } from './registro-acceso.service';
import { RegistroAccesoController } from './registro-acceso.controller';

/**
 * Módulo de NestJS para gestionar registros de acceso.
 * 
 * Agrupa el controlador y servicio de registros de acceso,
 * junto con sus dependencias.
 */
@Module({
  controllers: [RegistroAccesoController],
  providers: [RegistroAccesoService],
})
export class RegistroAccesoModule {}
