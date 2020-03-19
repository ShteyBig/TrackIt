import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwt.interceptor';

export const coreHelpers: any[] = [
    ErrorInterceptor,
    JwtInterceptor
];

export * from './error.interceptor';
export * from './jwt.interceptor';
