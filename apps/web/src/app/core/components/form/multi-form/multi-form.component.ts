import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IItem } from '../../../types/item';
import {
    TransactionAction,
    TransactionActionItem,
} from '../../../types/transaction';
import { FieldType } from '../../../types/fields';
import { EntrateFormComponent } from '../entrate-form/entrate-form.component';
import { GirocontoFormComponent } from '../giroconto-form/giroconto-form.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { SelectButtonComponent } from '../../input/select-button/select-button.component';
import { UsciteFormComponent } from '../uscite-form/uscite-form.component';

@Component({
    selector: 'multi-form',
    standalone: true,
    imports: [
        EntrateFormComponent,
        GirocontoFormComponent,
        NgSwitchCase,
        SelectButtonComponent,
        UsciteFormComponent,
        NgSwitch,
    ],
    templateUrl: './multi-form.component.html',
})
export class MultiFormComponent implements OnInit {
    @Input() whiteBorder = false;

    form!: FormGroup;

    selectedForm = 0;

    constructor(protected fb: FormBuilder) {}

    ngOnInit(): void {
        this.newForm(TransactionAction.INTERNAL);
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
                });
                break;
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
                });
                break;
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
                });
                break;
        }
    }

    changeForm = (newVal: IItem) => {
        if (this.selectedForm === newVal.value) return;

        this.selectedForm = newVal.value;
        this.newForm(newVal.value);
    };

    protected readonly TransactionAction = TransactionAction;
    protected readonly TransactionActionItem = TransactionActionItem;
    protected readonly FieldType = FieldType;
}
