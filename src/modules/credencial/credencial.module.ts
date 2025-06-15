import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { CredencialService } from './credencial.service';
import { CredencialController } from './credencial.controller';

/**
 * Controlador de API REST para gestión de credenciales.
 *
 * Requiere autenticación JWT.
 * Endpoints protegidos por roles específicos.
 */
@Module({
  imports: [PrismaModule],
  controllers: [CredencialController],
  providers: [CredencialService],
})
export class CredencialModule {}
