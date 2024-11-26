import {Routes} from '@angular/router'

import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component'
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component'

import {DashboardComponent} from './pages/dashboard/dashboard.component'
import {LoginComponent} from './pages/login/login.component'
import {ChangePasswordComponent} from './pages/change-password/change-password.component'
import {TestInputComponent} from './pages/test-input/test-input.component'
import {environment} from "../environments/environment";
import {TestOtherComponent} from "./pages/test-other/test-other.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent, title: 'Login - ' + environment.appName},
            {path: 'change-password', component: ChangePasswordComponent}
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'transactions', component: TransactionsComponent}
        ]
    },
    {path: 'test-input', component: TestInputComponent},
    {path: 'test-other', component: TestOtherComponent},
    {path: '**', redirectTo: 'login'}
]
