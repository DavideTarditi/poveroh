import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerPlugin from '../plugin/server.plugin';
import { ServerRequest } from '../types/server';
import { IUserLogin } from '../types/user';
import StoragePlugin from '../plugin/storage.plugin';
import { Router } from '@angular/router';
import { StorageType } from '../types/storage';

interface User {
    id: number;
    username: string;
    role: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private server = ServerPlugin();

    constructor(private http: HttpClient, private router: Router) {}

    login(user: IUserLogin) {
        this.server
            .send(ServerRequest.POST, '/auth/login', user, 'login')
            .then((result) => {
                this.router.navigate(['/dashboard']);
            });
    }

    logout() {}

    isAuthenticated(): boolean {
        const storageManager = new StoragePlugin(StorageType.COOKIE);
        return storageManager.has('token');
    }
}
