import { Component, Input } from '@angular/core';
import { FieldType } from '../../../types/fields';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IItem } from '../../../types/item';
import { currencyCatalog } from '../../../types/general';

@Component({
    selector: 'entrate-form',
    standalone: true,
    imports: [FieldInputComponent, ReactiveFormsModule],
    templateUrl: './entrate-form.component.html',
})
export class EntrateFormComponent {
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

    protected readonly FieldType = FieldType;

    onSubmit() {
        console.log('');
    }

    protected readonly currencyCatalog = currencyCatalog;
}
