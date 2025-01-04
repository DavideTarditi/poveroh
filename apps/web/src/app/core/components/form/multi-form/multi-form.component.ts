import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrateFormComponent } from '../entrate-form/entrate-form.component';
import { GirocontoFormComponent } from '../giroconto-form/giroconto-form.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { SelectButtonComponent } from '../../input/select-button/select-button.component';
import { UsciteFormComponent } from '../uscite-form/uscite-form.component';
import { FieldType, IItem, TransactionAction } from '@poveroh/types';
import { TransactionService } from '../../../services/transaction.services';

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

    constructor(
        protected fb: FormBuilder,
        private transactions: TransactionService
    ) {
        this.TransactionActionItem = this.transactions.readTransactionAction();
    }

    ngOnInit(): void {
        this.newForm(this.TransactionAction.INTERNAL);
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
            case TransactionAction.INCOME:
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
            case TransactionAction.EXPENSES:
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
    protected readonly TransactionActionItem: IItem[] = [];
    protected readonly FieldType = FieldType;
}
