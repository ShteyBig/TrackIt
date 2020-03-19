import { UserService } from './user.service';
import { AuthService } from './auth.service';

export const coreServices: any[] = [
    UserService,
    AuthService
];

export * from './user.service';
export * from './auth.service';