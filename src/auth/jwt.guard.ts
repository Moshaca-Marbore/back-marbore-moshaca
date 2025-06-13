import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

/**
 * Guardia para autenticación JWT obligatoria.
 *
 * Extiende la funcionalidad básica de AuthGuard('jwt') de Passport.
 */
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  /**
   * Implementación personalizada de canActivate.
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  /**
   * Implementación personalizada del manejo de errores de autenticación.
   */
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('No estás autenticado');
    }
    return user;
  }
}
