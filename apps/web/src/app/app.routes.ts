import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { TestInputComponent } from './pages/test/test-input/test-input.component';
import { TestOtherComponent } from './pages/test/test-other/test-other.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TestGraphqlComponent } from './pages/test/test-graphql/test-graphql.component';
import { environment } from '../environments/environment';

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
            },
            { path: 'change-password', component: ChangePasswordComponent },
        ],
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'transactions', component: TransactionsComponent },
        ],
    },
    { path: 'test-input', component: TestInputComponent },
    { path: 'test-other', component: TestOtherComponent },
    { path: 'test-graphql', component: TestGraphqlComponent },
    { path: '**', redirectTo: 'login' },
];
