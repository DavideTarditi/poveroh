import {Component, ViewChild} from '@angular/core'
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../core/services/charts";
import {ButtonComponent} from "../../core/components/input/button/button.component";
import {BoxLayoutComponent} from "../../layouts/box-layout/box-layout.component";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {AddTransactionsComponent} from "../../core/components/modals/add-transactions/add-transactions.component";
import {SelectButtonComponent} from "../../core/components/input/select-button/select-button.component";
import {IItem} from "../../core/types/item";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ChartComponent,
        ButtonComponent,
        BoxLayoutComponent,
        NgIf,
        Button,
        DialogModule,
        AddTransactionsComponent,
        SelectButtonComponent
    ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    visible: boolean = false;
    editingMode: boolean = false;

    toogleVisible(visible: boolean) {
        this.visible = visible;
    }

    toogleEditingMode() {
        this.editingMode = !this.editingMode;
    }

    dataYears: IItem[] = [
        {value: 2022, label: '2022'},
        {value: 2023, label: '2023'},
        {value: 2024, label: '2024'},
        {value: -1, label: 'Max'},
    ]


    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [14, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                width: '100%',
                height: 350,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
            }
        };
    }
}
