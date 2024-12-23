import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../core/components/input/button/button.component';

@Component({
    selector: 'app-test-input',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        ButtonComponent,
        FormsModule,
    ],
    templateUrl: './test-other.component.html',
})
export class TestOtherComponent {
    form: FormGroup;
    visible: boolean = true;

    toogleVisible(visible: boolean) {
        this.visible = visible;
    }

    events: any[];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            phone: [''],
            text: ['', Validators.required],
            select: ['', Validators.required],
            number: ['', Validators.required],
            amount: ['', Validators.required],
            currency: ['', Validators.required],
            date: ['', Validators.required],
            textarea: ['', Validators.required],
        });

        this.events = [
            {
                status: 'Ordered',
                date: '15/10/2020 10:30',
                icon: 'pi pi-shopping-cart',
                color: '#9C27B0',
                image: 'game-controller.jpg',
            },
            {
                status: 'Processing',
                date: '15/10/2020 14:00',
                icon: 'pi pi-cog',
                color: '#673AB7',
            },
            {
                status: 'Shipped',
                date: '15/10/2020 16:15',
                icon: 'pi pi-shopping-cart',
                color: '#FF9800',
            },
            {
                status: 'Delivered',
                date: '16/10/2020 10:00',
                icon: 'pi pi-check',
                color: '#607D8B',
            },
        ];
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Form submitted:', this.form.value);
        }
    }
}
