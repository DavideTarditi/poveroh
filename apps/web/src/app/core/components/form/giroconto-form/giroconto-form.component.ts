import { Component, Input } from '@angular/core';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { FieldType, IItem } from '@poveroh/types';
import { TranslationService } from '../../../services/translation.services';

@Component({
    selector: 'giroconto-form',
    standalone: true,
    imports: [FieldInputComponent, ReactiveFormsModule, MatIcon],
    templateUrl: './giroconto-form.component.html',
})
export class GirocontoFormComponent {
    @Input() form!: FormGroup;
    @Input() whiteBorder = false;

    constructor(private i18n: TranslationService) {
        this.TransactionActionItem =
            this.i18n.translateKey('translation.types');

        const ciao = 'c';
    }

    bankAccount: IItem[] = [
        { value: 'satispay', label: 'Satispay' },
        { value: 'revolut', label: 'Revolut' },
        { value: 'traderepublic', label: 'Trade Republic' },
    ];

    onSubmit() {
        console.log(this.form);
    }

    protected readonly FieldType = FieldType;
    private TransactionActionItem;
}
