import { StatusGeneral } from '@prisma/client';

export class CreateAlumnoTutorDto {
  id_relacion: string;
  boleta: string;
  id_tutor: string;
  id_parentesco: number;
  es_contacto_principal: number;
  status: StatusGeneral;
}
