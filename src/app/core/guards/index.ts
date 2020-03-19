import { AuthGuard } from './auth.guard';

export const coreGuards: any[] = [
    AuthGuard,
];

export * from './auth.guard';