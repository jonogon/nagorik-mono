import { CorrectedDocument } from '../typeInterfaces/type'

type UserRoles = 'user' | 'developer' ;

export interface UserInterface {
  phone: string;
  fullName: string;
  roles: UserRoles[];
  email?: string;
  isPhoneVerified: boolean;
  password: string;
}

export type UserDoc = UserInterface & CorrectedDocument

