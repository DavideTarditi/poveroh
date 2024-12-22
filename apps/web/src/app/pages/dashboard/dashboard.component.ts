import { Component, inject, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../core/components/input/button/button.component';
import { BoxLayoutComponent } from '../../layouts/box-layout/box-layout.component';
import { NgIf } from '@angular/common';
import { SelectButtonComponent } from '../../core/components/input/select-button/select-button.component';
import { IItem } from '../../core/types/item';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionsModal } from '../../core/components/modals/add-transactions/add-transactions.component';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../core/services/charts.services';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ButtonComponent,
        BoxLayoutComponent,
        NgIf,
        SelectButtonComponent,
        MatIcon,
        ChartComponent,
    ],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    @ViewChild('chart') chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions> | any;

    readonly dialog = inject(MatDialog);
    editingMode: boolean = false;

    toogleEditingMode() {
        this.editingMode = !this.editingMode;
    }

    openDialog() {
        const dialogRef = this.dialog.open(AddTransactionsModal);

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    dataYears: IItem[] = [
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' },
        { value: -1, label: 'Max' },
    ];

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [14, 41, 35, 51, 49, 62, 69, 91, 148],
                },
            ],
            chart: {
                width: '100%',
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                ],
            },
        };
    }

    protected readonly open = open;
}
