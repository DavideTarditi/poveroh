import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {ButtonComponent} from "../../input/button/button.component";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {FieldType} from "../../../types/fields";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {GirocontoFormComponent} from "../../form/giroconto-form/giroconto-form.component";
import {EntrateFormComponent} from "../../form/entrate-form/entrate-form.component";
import {UsciteFormComponent} from "../../form/uscite-form/uscite-form.component";
import {MultiFormComponent} from "../../form/multi-form/multi-form.component";

@Component({
    selector: 'add-transactions-modal',
    standalone: true,
    imports: [
        SelectButtonComponent,
        ButtonComponent,
        FieldInputComponent,
        NgIf,
        PrimeTemplate,
        DialogModule,
        GirocontoFormComponent,
        EntrateFormComponent,
        UsciteFormComponent,
        NgSwitch,
        NgSwitchCase,
        MultiFormComponent
    ],
    templateUrl: './add-transactions.component.html',
})
export class AddTransactionsComponent implements OnInit {
    @Input() visible: boolean = false;
    @Output() onCancel = new EventEmitter<boolean>();

    form!: FormGroup;
    formManagerModal: FormGroup;
    formBuilder: FormBuilder;

    ngOnInit(): void {

    }

    hideDialog(): void {
        this.visible = false;
        this.onCancel.emit(false);
    }

    constructor(private fb: FormBuilder) {
        this.formBuilder = fb
        this.formManagerModal = this.formBuilder.group({
            continueinsert: [''],
        })
    }

    protected readonly FieldType = FieldType;
}
