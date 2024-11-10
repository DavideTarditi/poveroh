import {Component, ViewChild} from '@angular/core'
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../core/services/charts";
import {ButtonComponent} from "../../core/components/input/button/button.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ChartComponent,
        ButtonComponent
    ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
