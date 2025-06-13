# Marbore Moshaca

## Descripción
Este es un sistema de gestión escolar desarrollado con NestJS, un framework Node.js para la creación de aplicaciones backend escalables y mantenibles.

## Características Principales

### Módulos Principales
- **Alumnos**: Gestión de información de estudiantes
- **Tutores**: Gestión de información de tutores
- **Alumno-Tutor**: Relación entre alumnos y sus tutores
- **Credenciales**: Manejo de las credenciales virtuales
- **Reportes**: Sistema de generación y gestión de reportes
- **Registro de Acceso**: Sistema de control de accesos
- **Catálogos**: 
  - Parentesco: Tipos de relación entre alumnos y tutores
  - Tipo de Reporte: Categorías de reportes disponibles

### Características Técnicas
- API REST con prefijo `/api`
- Soporte CORS habilitado
- Base de datos usando Prisma como ORM
- Sistema de autenticación integrado

## Estructura del Proyecto

```
src/
├── alumno/              # Módulo para gestión de alumnos
├── alumno-tutor/        # Módulo para relaciones alumno-tutor
├── auth/               # Módulo de autenticación
├── catalogos/          # Catálogos del sistema
├── credencial/         # Módulo de credenciales
├── prisma/             # Configuración y modelos de Prisma
├── registro-acceso/    # Módulo de registro de accesos
├── reporte/            # Módulo de reportes
└── tutor/             # Módulo para gestión de tutores
```

## Requisitos
- Node.js
- NestJS
- Prisma ORM
- Base de datos compatible con Prisma

## Configuración
1. Configurar variables de entorno:
   - `PORT`: Puerto de la aplicación (default: 3000)
   - `DATABASE_URL`: URL de la base de datos
   - `JWT_SECRET`: Secret para la autenticación JWT

2. Configurar Prisma:
   - Configurar el esquema en `prisma/schema.prisma`
   - Ejecutar migraciones con Prisma

## Inicio de la Aplicación
```bash
# Instalar dependencias
npm install

# Ejecutar migraciones
npx prisma migrate dev

# Generar el esquema de la base de datos
npx prisma generate

# Iniciar la aplicación
npm run start
```

La aplicación estará disponible en `http://localhost:3000` con el prefijo `/api` para todas las rutas.

## Seguridad
- CORS configurado para permitir peticiones desde cualquier origen
- Métodos HTTP permitidos: GET, HEAD, PUT, PATCH, POST, DELETE
- Headers permitidos: Content-Type, Accept

## Licencia
[MIT](LICENSE)