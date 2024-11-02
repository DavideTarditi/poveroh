import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NgIf, NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {

}
