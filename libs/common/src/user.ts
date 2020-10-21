import { SetMetadata } from "@nestjs/common";

export class UserUtils {
  // @ts-ignore
  // tslint:disable-next-line:typedef
  static getUserFromRequest(request): User {
    // @ts-ignore
    return request.user;
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
}

export const UserPath = (path: string) => SetMetadata('userPath', path);
export const RequireAdmin = () => SetMetadata('admin', true);
