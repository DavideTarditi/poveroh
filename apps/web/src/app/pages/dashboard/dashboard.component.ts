import {Component} from '@angular/core'
import {SvgIconComponent} from "../../core/components/other/svg-icon/svg-icon.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        SvgIconComponent
    ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
