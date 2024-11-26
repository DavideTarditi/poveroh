import {Component, OnInit} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {NgOptimizedImage} from "@angular/common";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PrimeNGConfig} from "primeng/api";
import {overlayOptions} from "../../core/types/popover";

@Component({
    selector: 'app-app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        NgOptimizedImage,
        RouterLink,
        OverlayPanelModule
    ],
    templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.overlayOptions = overlayOptions
    }

}
