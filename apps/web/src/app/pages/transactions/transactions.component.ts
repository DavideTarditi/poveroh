import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../core/components/input/button/button.component';
import { BoxLayoutComponent } from '../../layouts/box-layout/box-layout.component';
import { FieldInputComponent } from '../../core/components/input/fields/field-input/field-input.component';
import { FieldType } from '../../core/types/fields';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTransactionsModal } from '../../core/components/modals/add-transactions/add-transactions.component';
import { BoxItemComponent } from '../../core/components/other/box-item/box-item.component';
import { UploadTransactionsModal } from '../../core/components/modals/upload-transactions/upload-transactions.component';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ButtonComponent,
        BoxLayoutComponent,
        FieldInputComponent,
        BoxItemComponent,
        MatMenu,
        MatMenuTrigger,
        MatIcon,
    ],
    templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
    readonly dialog = inject(MatDialog);

    openDialog(modal: 'manual' | 'upload') {
        let dialogRef;

        switch (modal) {
            case 'manual':
                dialogRef = this.dialog.open(AddTransactionsModal);
                break;
            case 'upload':
                dialogRef = this.dialog.open(UploadTransactionsModal);
                break;
        }

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            search: ['', [Validators.required]],
        });
    }

    ngOnInit() {}

    protected readonly FieldType = FieldType;
}
