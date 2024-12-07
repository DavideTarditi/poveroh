import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FieldType } from '../../core/types/fields';
import { ButtonComponent } from '../../core/components/input/button/button.component';
import { RouterLink } from '@angular/router';
import { FieldInputComponent } from '../../core/components/input/fields/field-input/field-input.component';

@Component({
    selector: 'page-login',
    standalone: true,

    imports: [
        ReactiveFormsModule,
        ButtonComponent,
        RouterLink,
        FieldInputComponent,
    ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Form submitted:', this.form.value);
        }
    }

    protected readonly FieldType = FieldType;
}
