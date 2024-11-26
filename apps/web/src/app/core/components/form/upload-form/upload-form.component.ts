import {Component, Input} from '@angular/core';
import {FieldType} from "../../../types/fields";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IItem} from "../../../types/item";
import {ButtonComponent} from "../../input/button/button.component";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {EntrateFormComponent} from "../entrate-form/entrate-form.component";
import {GirocontoFormComponent} from "../giroconto-form/giroconto-form.component";
import {NgIf, NgSwitchCase} from "@angular/common";
import {UsciteFormComponent} from "../uscite-form/uscite-form.component";
import {MultiFormComponent} from "../multi-form/multi-form.component";

@Component({
    selector: 'upload-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        SelectButtonComponent,
        ReactiveFormsModule,
        ButtonComponent,
        ConfirmPopupModule,
        ToastModule,
        OverlayPanelModule,
        EntrateFormComponent,
        GirocontoFormComponent,
        NgSwitchCase,
        UsciteFormComponent,
        MultiFormComponent,
        NgIf
    ],
    providers: [ConfirmationService, MessageService],
    templateUrl: './upload-form.component.html',
})
export class UploadFormComponent {
    @Input() form!: FormGroup;
    @Input() whiteBorder: boolean = false;

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

    onSubmit() {

    }

    protected readonly FieldType = FieldType;
}
