import {Component, Input, OnInit} from '@angular/core'
import {NgOptimizedImage} from '@angular/common'

@Component({
    selector: 'svg-icon',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './svg-icon.component.html'
})
export class SvgIconComponent implements OnInit {
    @Input() path: string = ''
    @Input() size: string = 'mid'

    protected width: number = 24
    protected height: number = 24

    ngOnInit() {
        switch (this.size) {
            case 'extra-small':
                this.width = this.height = 15
                break
            case 'small':
                this.width = this.height = 20
                break
            case 'mid':
                this.width = this.height = 24
                break
            case 'big':
                this.width = this.height = 28
                break
        }
    }
}
