import { SetMetadata } from '@nestjs/common';

/**
 * Decorador para definir roles requeridos en controladores o handlers.
 *
 * Almacena los roles en metadatos para ser consultados por RolesGuard.
 */
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
