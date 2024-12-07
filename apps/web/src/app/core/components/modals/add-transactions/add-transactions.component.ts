import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../input/button/button.component';
import { FieldInputComponent } from '../../input/fields/field-input/field-input.component';
import { FieldType } from '../../../types/fields';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MultiFormComponent } from '../../form/multi-form/multi-form.component';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
    selector: 'add-transactions-modal',
    standalone: true,
    imports: [
        ButtonComponent,
        FieldInputComponent,
        MultiFormComponent,
        MatDialogContent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add-transactions.component.html',
})
export class AddTransactionsComponent implements OnInit {
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
        this.formManagerModal = this.formBuilder.group({
            continueinsert: [''],
        });
    }

    protected readonly FieldType = FieldType;
}
