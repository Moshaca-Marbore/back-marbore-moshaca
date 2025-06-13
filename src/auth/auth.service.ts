import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type Role = 'admin' | 'alumno';

/**
 * Servicio para operaciones de autenticación.
 *
 * Genera y valida tokens JWT con información de roles.
 */
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Genera un token JWT firmado.
   *
   * @param id - Identificador del usuario (boleta o ID).
   * @param role - Rol del usuario ('admin' | 'alumno').
   * @returns Token JWT válido por 1 día.
   *
   * @example
   * generateToken('20230001', 'alumno');
   */
  generateToken(id: string, role: Role): string {
    const payload = {
      sub: id,
      role: role,
    };

    return this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret: process.env.JWT_SECRET,
    });
  }
  
  /**
   * Valida y decodifica un token JWT.
   *
   * @param token - Token JWT a validar.
   * @returns Payload decodificado.
   * @throws Error si el token es inválido.
   */
  validateToken(token: string): { sub: string; role: Role } {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });
  }
}
