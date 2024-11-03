import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {NgOptimizedImage} from "@angular/common";
import {PopoverComponent} from "../../core/components/other/popover/popover.component";
import {SvgIconComponent} from "../../core/components/other/svg-icon/svg-icon.component";

@Component({
    selector: 'app-app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        NgOptimizedImage,
        RouterLink,
        PopoverComponent,
        SvgIconComponent
    ],
    templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent {

}
