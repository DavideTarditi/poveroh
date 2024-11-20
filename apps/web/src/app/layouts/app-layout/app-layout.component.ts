import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {NgOptimizedImage} from "@angular/common";
import {PopoverComponent} from "../../core/components/popover/popover.component"

@Component({
    selector: 'app-app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        NgOptimizedImage,
        RouterLink,
        PopoverComponent
    ],
    templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent {

}
