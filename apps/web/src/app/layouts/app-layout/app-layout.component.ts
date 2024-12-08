import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

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
    ],
    templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
