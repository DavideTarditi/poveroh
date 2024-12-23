import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '../../../types/fields';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { IItem } from '../../../types/item';
import { currencyCatalog } from '../../../types/general';
import { NgForOf, NgIf } from '@angular/common';
import { ButtonComponent } from '../../input/button/button.component';
import { NewAmountIconComponent } from '../../other/new-amount-icon/new-amount-icon.component';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'uscite-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        ReactiveFormsModule,
        NgIf,
        ButtonComponent,
        NewAmountIconComponent,
        NgForOf,
        MatIcon,
    ],
    templateUrl: './uscite-form.component.html',
})
export class UsciteFormComponent implements OnInit {
    @Input() whiteBorder = false;
    @Input() form!: FormGroup;
    @Input() fb!: FormBuilder;

    splittedAmount = false;
    firstTimeOpened = true;

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

    protected readonly FieldType = FieldType;

    onSubmit() {
        console.log('onSubmit');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    toogleSplitAmount() {
        this.splittedAmount = !this.splittedAmount;

        if (this.firstTimeOpened) {
            this.firstTimeOpened = false;
            this.addControl();
        }
    }

    amountControls(): AbstractControl<any, any>[] {
        return (this.form.get('amounts') as FormArray).controls;
    }

    private createGroup(): FormGroup {
        return this.fb.group({
            amount: [0, Validators.required],
            bankAccount: ['', Validators.required],
        });
    }

    addControl(): void {
        (this.form.get('amounts') as FormArray).push(this.createGroup());
    }

    removeControl(index: number): void {
        const control = this.form.get('amounts') as FormArray;
        control.removeAt(index);
    }

    protected readonly currencyCatalog = currencyCatalog;
}
