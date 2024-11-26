import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {TransactionAction, TransactionActionItem} from "../../../types/transaction";
import {ButtonComponent} from "../../input/button/button.component";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {FieldType} from "../../../types/fields";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {GirocontoFormComponent} from "../../form/giroconto-form/giroconto-form.component";
import {EntrateFormComponent} from "../../form/entrate-form/entrate-form.component";
import {UsciteFormComponent} from "../../form/uscite-form/uscite-form.component";
import {IItem} from "../../../types/item";
import {UploadFormComponent} from "../../form/upload-form/upload-form.component";

@Component({
    selector: 'upload-transactions-modal',
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
        UploadFormComponent
    ],
    templateUrl: './upload-transactions.component.html',
})
export class UploadTransactionsComponent implements OnInit {
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
        this.form = this.fb.group({
            upload: [[], Validators.required],
            bankAccount: ['', Validators.required],
            ignore: [false],
        })
        this.formManagerModal = this.fb.group({
            continueinsert: [''],
        })
    }

    protected readonly FieldType = FieldType;
}
