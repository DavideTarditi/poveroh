import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectButtonComponent} from "../../input/select-button/select-button.component";
import {TransactionAction, TransactionActionItem} from "../../../types/transaction";
import {ButtonComponent} from "../../input/button/button.component";
import {FieldInputComponent} from "../../input/fields/field-input/field-input.component";
import {FieldType} from "../../../types/fields";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {GirocontoFormComponent} from "../../form/giroconto-form/giroconto-form.component";
import {EntrateFormComponent} from "../../form/entrate-form/entrate-form.component";
import {UsciteFormComponent} from "../../form/uscite-form/uscite-form.component";
import {IItem} from "../../../types/item";

@Component({
    selector: 'transactions-modal',
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
        UsciteFormComponent
    ],
    templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
    @Input() visible: boolean = false;
    @Output() onCancel = new EventEmitter<boolean>();

    form!: FormGroup;
    formManagerModal: FormGroup;

    fb: FormBuilder

    selectedForm: number = 0

    ngOnInit(): void {

    }

    hideDialog(): void {
        this.visible = false;
        this.onCancel.emit(false);
    }

    constructor(private localFb: FormBuilder) {
        this.fb = localFb
        this.newForm(TransactionAction.INTERNAL)
        this.formManagerModal = this.fb.group({
            continueinsert: [''],
        })
    }

    newForm(index: TransactionAction): void {
        switch (index) {
            case TransactionAction.INTERNAL:
                this.form = this.fb.group({
                    title: ['', Validators.required],
                    date: ['', Validators.required],
                    amount: [0, Validators.required],
                    bankAccountFrom: ['', Validators.required],
                    bankAccountTo: ['', Validators.required],
                    note: [''],
                    ignore: [false],
                })
                break
            case TransactionAction.ADD:
                this.form = this.fb.group({
                    title: ['', Validators.required],
                    date: ['', Validators.required],
                    currency: ['', Validators.required],
                    amount: [0, Validators.required],
                    bankAccount: ['', Validators.required],
                    category: ['', Validators.required],
                    subcategory: ['', Validators.required],
                    files: ['', Validators.required],
                    note: [''],
                    ignore: [false],
                })
                break
            case TransactionAction.SUB:
                this.form = this.fb.group({
                    title: ['', Validators.required],
                    date: ['', Validators.required],
                    currency: ['', Validators.required],
                    baseAmount: [0, Validators.required],
                    baseBankAccount: ['', Validators.required],
                    amounts: this.fb.array([]),
                    category: ['', Validators.required],
                    subcategory: ['', Validators.required],
                    files: ['', Validators.required],
                    note: [''],
                    ignore: [false],
                })
                break
        }
    }

    changeForm = (newVal: IItem) => {
        if (this.selectedForm === newVal.value) return;

        this.selectedForm = newVal.value;
        this.newForm(newVal.value)
    }
    protected readonly TransactionAction = TransactionAction;
    protected readonly TransactionActionItem = TransactionActionItem;
    protected readonly FieldType = FieldType;
}
