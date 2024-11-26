import {Component, Input} from '@angular/core';
import {FieldType} from "../../../types/fields";
import {TransactionActionItem} from "../../../types/transaction";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IItem} from "../../../types/item";
import {currencyCatalog} from "../../../types/general";

@Component({
    selector: 'entrate-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        SelectButtonComponent,
        ReactiveFormsModule
    ],
    templateUrl: './entrate-form.component.html',
})
export class EntrateFormComponent {
    @Input() form!: FormGroup;
    @Input() whiteBorder: boolean = false

    bankAccount: IItem[] = [
        {value: 'satispay', label: 'Satispay'},
        {value: 'revolut', label: 'Revolut'},
        {value: 'traderepublic', label: 'Trade Republic'},
    ]

    category: IItem[] = [
        {value: 'food', label: 'Cibo'},
        {value: 'vestiti', label: 'Vistiti'},
        {value: 'salute', label: 'Salute'},
    ]

    subCategory: IItem[] = [
        {value: 'bar', label: 'Bar'},
        {value: 'zara', label: 'Zara'},
        {value: 'dentista', label: 'Dentista'},
    ]

    protected readonly FieldType = FieldType;

    onSubmit() {

    }

    protected readonly currencyCatalog = currencyCatalog;
}
