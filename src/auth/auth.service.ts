import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type Role = 'admin' | 'alumno';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

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

  validateToken(token: string): { sub: string; role: Role } {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });
  }
}
