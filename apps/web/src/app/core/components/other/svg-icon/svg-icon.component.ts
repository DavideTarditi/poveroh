import {Component, Input} from '@angular/core'
import {NgOptimizedImage} from '@angular/common'

@Component({
    selector: 'svg-icon',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './svg-icon.component.html'
})
export class SvgIconComponent {
    @Input() path: string = ''
}
