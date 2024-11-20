import {Component, Input} from '@angular/core';
import {FieldType} from "../../../types/fields";
import {TransactionActionItem} from "../../../types/transaction";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IItem} from "../../../types/item";

@Component({
    selector: 'giroconto-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        SelectButtonComponent,
        ReactiveFormsModule
    ],
    templateUrl: './giroconto-form.component.html',
})
export class GirocontoFormComponent {
    @Input() form!: FormGroup;

    bankAccount: IItem[] = [
        {value: 'satispay', label: 'Satispay'},
        {value: 'revolut', label: 'Revolut'},
        {value: 'traderepublic', label: 'Trade Republic'},
    ]

    protected readonly FieldType = FieldType;
    protected readonly TransactionActionItem = TransactionActionItem;

    onSubmit() {

    }
}
