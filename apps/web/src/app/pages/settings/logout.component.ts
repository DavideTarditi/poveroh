import { Component } from '@angular/core';
import StoragePlugin from '../../core/plugin/storage.plugin';
import { StorageType } from '@poveroh/types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [],
    templateUrl: './logout.component.html',
})
export class LogoutComponent {
    constructor(private router: Router) {
        const storage = new StoragePlugin(StorageType.LOCAL);
        const cookie = new StoragePlugin(StorageType.COOKIE);

        storage.clear();
        cookie.clear();

        this.router.navigate(['login']);
    }
}
