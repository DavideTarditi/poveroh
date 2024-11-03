import {Component, HostListener, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    standalone: true,
    imports: [
        NgIf
    ]
})
export class PopoverComponent {
    @Input() isVisible: boolean = false;

    @HostListener('document:click', ['$event.target'])
    onClickOutside(target: EventTarget): void {
        if (this.isVisible && !(target as HTMLElement).closest('.popover-container')) {
          this.isVisible = false;
        }
    }

    toggleVisibility(): void {
        this.isVisible = !this.isVisible;
    }
}
