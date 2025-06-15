import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { AuthService } from './auth.service';

/**
 * Controlador para operaciones de autenticación.
 *
 * Expone endpoints para:
 * - Login de usuarios (admin/alumno)
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Endpoint de login para usuarios y administradores.
   *
   * @param credentials - { boleta, curp, role }
   * @returns Token JWT válido
   * @throws UnauthorizedException si las credenciales son inválidas
   *
   * @example
   * POST /auth/login { "boleta": "20230001", "curp": "ABC123", "role": "alumno" }
   */
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
