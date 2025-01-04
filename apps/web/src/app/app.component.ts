import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'poveroh-frontend';

    constructor() {}

    ngOnInit() {}
}
