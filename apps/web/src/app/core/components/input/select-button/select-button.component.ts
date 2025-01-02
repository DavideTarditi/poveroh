import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { IItem } from '@poveroh/types';

@Component({
    selector: 'select-button',
    standalone: true,
    imports: [ButtonComponent, NgIf],
    templateUrl: './select-button.component.html',
})
export class SelectButtonComponent implements OnInit {
    @Input() label = '';
    @Input() required = false;

    @Input() data: IItem[] = [];
    @Input() fullSize: boolean = false;

    @Output() onValueChange = new EventEmitter<IItem>();

    selectedValue!: IItem;

    ngOnInit() {
        if (this.data == undefined || this.data.length == 0) return;

        this.changeValue(this.data[0]);
    }

    changeValue = (val: IItem) => {
        this.selectedValue = val;
        this.onValueChange.emit(this.selectedValue);
    };
}
