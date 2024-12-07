import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../input/button/button.component';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FieldType } from '../../../types/fields';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFormComponent } from '../../form/upload-form/upload-form.component';

@Component({
    selector: 'upload-transactions-modal',
    standalone: true,
    imports: [
        ButtonComponent,
        FieldInputComponent,
        UploadFormComponent,
    ],
    templateUrl: './upload-transactions.component.html',
})
export class UploadTransactionsComponent implements OnInit {
    @Input() visible: boolean = false;
    @Output() onCancel = new EventEmitter<boolean>();

    form!: FormGroup;
    formManagerModal: FormGroup;
    formBuilder: FormBuilder;

    ngOnInit(): void {}

    hideDialog(): void {
        this.visible = false;
        this.onCancel.emit(false);
    }

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
