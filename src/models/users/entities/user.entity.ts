import { Role } from "@prisma/client";

export class User {
  id?: string;
  name: string;
  role: Role;
  email: string;
  password: string;
  endereco: string;
  phone?: string;
  cpf?: string;
  created_at: Date;
  updated_at: Date;
}
