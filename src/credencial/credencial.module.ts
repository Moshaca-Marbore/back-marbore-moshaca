import { Module } from '@nestjs/common';
import { CredencialService } from './credencial.service';
import { CredencialController } from './credencial.controller';

@Module({
  controllers: [CredencialController],
  providers: [CredencialService],
})
export class CredencialModule {}
