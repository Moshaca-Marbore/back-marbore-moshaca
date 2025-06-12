import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('login')
  async login(
    @Body()
    credentials: {
      boleta: string;
      curp: string;
      role: 'admin' | 'alumno';
    },
  ) {
    const { boleta, curp, role } = credentials;

    if (role === 'admin') {
      const isAdmin = boleta === 'admin' && curp === 'admin';

      if (!isAdmin) {
        throw new UnauthorizedException(
          'Credenciales inválidas para administrador',
        );
      }
    } else {
      const user = await this.prisma.alumno.findUnique({
        where: { boleta, curp },
      });

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }
    }

    return {
      access_token: this.authService.generateToken(boleta, role),
    };
  }
}
