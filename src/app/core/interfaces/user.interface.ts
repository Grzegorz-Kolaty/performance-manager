import { Role } from "../enums";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  roles: Role[];
  forms: string[];
}