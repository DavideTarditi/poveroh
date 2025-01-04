import { Component, Input } from '@angular/core';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../input/button/button.component';
import { NgIf } from '@angular/common';
import { MultiFormComponent } from '../multi-form/multi-form.component';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { FieldType, IItem } from '@poveroh/types';

@Component({
    selector: 'upload-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        MultiFormComponent,
        NgIf,
        MatMenu,
        MatMenuTrigger,
        MatIcon,
    ],
    providers: [],
    templateUrl: './upload-form.component.html',
})
export class UploadFormComponent {
    @Input() form!: FormGroup;
    @Input() whiteBorder = false;

    bankAccount: IItem[] = [
        { value: 'satispay', label: 'Satispay' },
        { value: 'revolut', label: 'Revolut' },
        { value: 'traderepublic', label: 'Trade Republic' },
    ];

    category: IItem[] = [
        { value: 'food', label: 'Cibo' },
        { value: 'vestiti', label: 'Vistiti' },
        { value: 'salute', label: 'Salute' },
    ];

    subCategory: IItem[] = [
        { value: 'bar', label: 'Bar' },
        { value: 'zara', label: 'Zara' },
        { value: 'dentista', label: 'Dentista' },
    ];

    onSubmit() {
        console.log(this.form);
    }

    protected readonly FieldType = FieldType;
}
