import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'box-layout',
    standalone: true,
    imports: [NgTemplateOutlet, NgIf],
    templateUrl: './box-layout.component.html',
    styleUrl: './box-layout.component.css',
})
export class BoxLayoutComponent {
    @Input() title: string = '';

    @ContentChild('header') header?: TemplateRef<any>;
    @ContentChild('body') body?: TemplateRef<any>;
}
