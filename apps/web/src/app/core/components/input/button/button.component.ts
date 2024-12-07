import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'go-button',
    standalone: true,
    imports: [NgClass, NgIf],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() message = '';
    @Input() disabled = false;
    @Input() size: string = '';
    @Input() icon: string = '';
    @Input() iconReverse: boolean = false;
    @Input() mode: 'success' | 'danger' | 'filled' | 'outline' | '' = '';
    @Input() loading: boolean = false;
    @Input() validate: boolean = true;
}
