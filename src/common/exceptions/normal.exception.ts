import { HttpException } from '@nestjs/common';

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
