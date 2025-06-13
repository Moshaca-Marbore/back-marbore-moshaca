import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * Estrategia JWT para autenticación con Passport.
 *
 * Valida tokens JWT y extrae el payload para su uso en guards.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') || 'secretKey',
    });
  }
  
  /**
   * Valida y transforma el payload del token JWT.
   *
   * @param payload - Contenido del token decodificado.
   * @returns Objeto con información del usuario para la request.
   */
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
