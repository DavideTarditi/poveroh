import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/input/button/button.component';
import { BoxLayoutComponent } from '../../layouts/box-layout/box-layout.component';
import { NgIf } from '@angular/common';
import { AddTransactionsComponent } from '../../core/components/modals/add-transactions/add-transactions.component';
import { SelectButtonComponent } from '../../core/components/input/select-button/select-button.component';
import { IItem } from '../../core/types/item';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ButtonComponent,
        BoxLayoutComponent,
        NgIf,
        AddTransactionsComponent,
        SelectButtonComponent,
    ],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    visible: boolean = false;
    editingMode: boolean = false;

    toogleVisible(visible: boolean) {
        this.visible = visible;
    }

    toogleEditingMode() {
        this.editingMode = !this.editingMode;
    }

    dataYears: IItem[] = [
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' },
        { value: -1, label: 'Max' },
    ];

    constructor() {}
}
