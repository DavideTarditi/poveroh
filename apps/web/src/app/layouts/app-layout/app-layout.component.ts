import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent {

}
