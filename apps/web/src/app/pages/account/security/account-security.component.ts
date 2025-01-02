import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.services';
import { environment } from '../../../../environments/environment';
import { FieldInputComponent } from '../../../core/components/input/fields/field-input/field-input.component';
import { FieldType } from '@poveroh/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/components/input/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-account-security',
    standalone: true,
    imports: [
        FieldInputComponent,
        ButtonComponent,
        MatIcon,
        TranslatePipe,
        RouterLink,
    ],
    templateUrl: './account-security.component.html',
})
export class AccountSecurityComponent implements OnInit {
    form!: FormGroup;

    constructor(protected fb: FormBuilder, protected i18n: TranslationService) {
        this.form = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
    }

    ngOnInit() {

    }

    protected readonly environment = environment;
    protected readonly FieldType = FieldType;
}
