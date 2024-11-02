import { Component, Input } from '@angular/core'

@Component({
  selector: 'go-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() message = ''
  @Input() disabled = false
}
