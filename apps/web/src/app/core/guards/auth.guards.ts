import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isAuthenticated = this.authService.isAuthenticated();
        const isLoginPage = this.isLoginRoute(route);

        if (isAuthenticated && isLoginPage) {
            this.router.navigate(['/dashboard']);
        }

        if (isAuthenticated) {
            return true;
        }

        if (!isAuthenticated && !isLoginPage) {
            this.router.navigate(['/login']);
        }

        return true;
    }

    private isLoginRoute(route: ActivatedRouteSnapshot): boolean {
        return route.url.length > 0 && route.url[0].path === 'login';
    }
}
