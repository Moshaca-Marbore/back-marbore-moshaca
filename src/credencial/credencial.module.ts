import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CredencialService } from './credencial.service';
import { CredencialController } from './credencial.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CredencialController],
  providers: [CredencialService],
})
export class CredencialModule {}
