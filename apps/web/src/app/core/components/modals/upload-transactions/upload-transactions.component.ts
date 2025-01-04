import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../input/button/button.component';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFormComponent } from '../../form/upload-form/upload-form.component';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { FieldType } from '@poveroh/types';

@Component({
    selector: 'upload-transactions-modal',
    standalone: true,
    imports: [
        ButtonComponent,
        FieldInputComponent,
        UploadFormComponent,
        MatDialogContent,
        MatDialogActions,
        MatDialogTitle,
        MatDialogClose,
    ],
    templateUrl: './upload-transactions.component.html',
})
export class UploadTransactionsModal implements OnInit {
    @Output() onCancel = new EventEmitter<boolean>();

    form!: FormGroup;
    formManagerModal: FormGroup;
    formBuilder: FormBuilder;

    ngOnInit(): void {}

    constructor(private fb: FormBuilder) {
        this.formBuilder = fb;
        this.form = this.fb.group({
            upload: [[], Validators.required],
            bankAccount: ['', Validators.required],
            ignore: [false],
        });
        this.formManagerModal = this.fb.group({
            continueinsert: [''],
        });
    }

    protected readonly FieldType = FieldType;
}
