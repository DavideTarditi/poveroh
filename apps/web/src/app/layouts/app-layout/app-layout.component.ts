import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.services';
import { UserService } from '../../core/services/user.services';
import { IUser } from '@poveroh/types';

@Component({
    selector: 'app-app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        NgOptimizedImage,
        RouterLink,
        MatMenu,
        MatMenuTrigger,
        MatIcon,
        TranslatePipe,
    ],
    templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnInit {
    constructor(
        protected i18n: TranslationService,
        protected userService: UserService
    ) {}

    async ngOnInit() {
        this.user = await this.userService.me(true);
    }

    protected user: IUser | undefined;
}
