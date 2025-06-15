import { HttpException } from '@nestjs/common';

/**
 * Excepción personalizada para cuando algo sale mal.
 *
 * Devuelve un error HTTP 418 (I'm a teapot) con un mensaje humorístico
 * relacionado con Bocchi, personaje de anime conocido por su ansiedad social.
 * Si, tuve que documentar esto de la forma más seria posible... Ignoren esto...
 * No me juzguen por esto.
 *
 * @example
 * throw new NormalException();
 * // Respuesta: { error: 'Bocchi está demasiado nerviosa...' } (status 418)
 */
export class NormalException extends HttpException {
  constructor() {
    super(
      {
        error: 'Bocchi está demasiado nerviosa para procesar esta solicitud ☕',
      },
      418,
    );
  }
}
