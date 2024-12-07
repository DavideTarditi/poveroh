import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatMenu } from '@angular/material/menu';

@Component({
    selector: 'app-app-layout',
    standalone: true,
    imports: [RouterOutlet, NgOptimizedImage, RouterLink, MatMenu],
    templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
