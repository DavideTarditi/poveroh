import { Routes } from '@angular/router'

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './pages/login/login.component'
import { ChangePasswordComponent } from './pages/change-password/change-password.component'
import { TestInputComponent } from './pages/test-input/test-input.component'

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'test-input', component: TestInputComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
]
