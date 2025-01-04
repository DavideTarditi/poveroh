import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.services';
import { environment } from '../../../../environments/environment';
import { FieldInputComponent } from '../../../core/components/input/fields/field-input/field-input.component';
import { FieldType } from '@poveroh/types';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../core/components/input/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { encryptString } from '../../../core/utils/tools';
import { UserService } from '../../../core/services/user.services';
import notifyPlugin from '../../../core/plugin/notify.plugin';

@Component({
    selector: 'app-account-security',
    standalone: true,
    imports: [
        FieldInputComponent,
        ButtonComponent,
        MatIcon,
        TranslatePipe,
        RouterLink,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: './account-security.component.html',
})
export class AccountSecurityComponent implements OnInit {
    form!: FormGroup;
    passwordMismatch: boolean = false;

    constructor(
        protected fb: FormBuilder,
        protected i18n: TranslationService,
        private userService: UserService
    ) {
        this.form = this.fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
    }

    ngOnInit() {}

    async onSubmit() {
        if (!this.form.valid) return;

        const notify = notifyPlugin().notify;

        const dataToSend = {
            oldpassword: await encryptString(this.form.value.oldPassword),
            newpassword: await encryptString(this.form.value.newPassword),
        };

        if (this.form.value.newPassword != this.form.value.confirmPassword) {
            this.passwordMismatch = true;
            return;
        }

        const res: boolean = await this.userService.updatePassword(dataToSend);

        if (res) {
            this.form.reset();
            notify.success(
                this.i18n.t(
                    'settings.account.security.form.password.messages.success'
                )
            );
        }
    }

    protected readonly environment = environment;
    protected readonly FieldType = FieldType;
}
