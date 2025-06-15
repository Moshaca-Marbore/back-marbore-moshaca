import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * Guardia para verificación de roles de usuario.
 *
 * Implementa la lógica de autorización basada en roles definidos
 * mediante el decorador @Roles().
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  /**
   * Verifica si el usuario tiene los roles requeridos para acceder al recurso.
   *
   * @param context - Contexto de ejecución de NestJS.
   * @returns `true` si tiene acceso, lanza excepción si no cumple los requisitos.
   * @throws ForbiddenException si el usuario no tiene los permisos necesarios.
   */
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user?.role) {
      throw new ForbiddenException('Usuario no tiene roles asignados');
    }

    const hasRole = requiredRoles.some((role) => user.role === role);
    if (!hasRole) {
      throw new ForbiddenException(
        'No tienes permiso para acceder a este recurso',
      );
    }

    return true;
  }
}
