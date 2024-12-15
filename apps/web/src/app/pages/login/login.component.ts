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
import { UserService } from '../../core/services/user';
import { encryptString } from '../../core/utils/tools'

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

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    async onSubmit() {
        if (this.form.valid) {
            this.userService.login(this.form.value.email, await encryptString(this.form.value.password)).subscribe((result) => {
                console.log('Result:', result.data.login);
            })
            console.log('Form submitted:', this.form.value);
        } else {
            console.log('Form non submitted');
        }
    }

    protected readonly FieldType = FieldType;
}
