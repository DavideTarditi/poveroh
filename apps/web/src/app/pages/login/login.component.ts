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
import { encryptString } from '../../core/utils/tools';
import { AuthService } from '../../core/services/auth.services';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.services';

@Component({
    selector: 'page-login',
    standalone: true,

    imports: [
        ReactiveFormsModule,
        ButtonComponent,
        RouterLink,
        FieldInputComponent,
        TranslatePipe,
    ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        protected i18n: TranslationService
    ) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    async onSubmit() {
        if (this.form.valid) {
            this.authService.login({
                email: this.form.value.email,
                password: await encryptString(this.form.value.password),
            });

            console.log('Form submitted:', this.form.value);
        } else {
            console.log('Form non submitted');
        }
    }

    protected readonly FieldType = FieldType;
}
