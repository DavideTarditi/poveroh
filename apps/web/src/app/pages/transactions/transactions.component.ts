import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../core/components/input/button/button.component';
import { BoxLayoutComponent } from '../../layouts/box-layout/box-layout.component';
import { FieldInputComponent } from '../../core/components/input/fields/field-input/field-input.component';
import { FieldType } from '../../core/types/fields';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTransactionsComponent } from '../../core/components/modals/add-transactions/add-transactions.component';
import { BoxItemComponent } from '../../core/components/other/box-item/box-item.component';
import { UploadTransactionsComponent } from '../../core/components/modals/upload-transactions/upload-transactions.component';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ButtonComponent,
        BoxLayoutComponent,
        FieldInputComponent,
        AddTransactionsComponent,
        BoxItemComponent,
        UploadTransactionsComponent,
        MatMenu,
        MatMenuTrigger,
    ],
    templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
    form: FormGroup;

    visibleManualInsertModal: boolean = false;
    visibleManualUploadModal: boolean = true;

    toogleVisible(modal: 'manual' | 'upload', visible: boolean) {
        switch (modal) {
            case 'manual':
                this.visibleManualInsertModal = visible;
                break;
            case 'upload':
                this.visibleManualUploadModal = visible;
                break;
        }
    }

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            search: ['', [Validators.required]],
        });
    }

    ngOnInit() {}

    protected readonly FieldType = FieldType;
}
