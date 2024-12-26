import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { TestInputComponent } from './pages/test/test-input/test-input.component';
import { TestOtherComponent } from './pages/test/test-other/test-other.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/guards/auth.guards';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
                title: 'Login - ' + environment.APP_NAME,
                canActivate: [AuthGuard],
            },
            { path: 'change-password', component: ChangePasswordComponent },
        ],
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'transactions',
                component: TransactionsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'settings',
                component: SettingsComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
    { path: 'test-input', component: TestInputComponent },
    { path: 'test-other', component: TestOtherComponent },
    { path: '**', redirectTo: 'login' },
];
