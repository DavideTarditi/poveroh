import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.services';
import { environment } from '../../../../environments/environment';
import { ButtonComponent } from '../../../core/components/input/button/button.component';
import { FieldInputComponent } from '../../../core/components/input/fields/field-input/field-input.component';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FieldType, IUser } from '@poveroh/types';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.services';
import NotifyPlugin from '../../../core/plugin/notify.plugin';

@Component({
    selector: 'app-account-edit',
    standalone: true,
    imports: [
        ButtonComponent,
        FieldInputComponent,
        MatIcon,
        TranslatePipe,
        RouterLink,
        ReactiveFormsModule,
    ],
    templateUrl: './account-edit.component.html',
})
export class AccountEditComponent implements OnInit {
    form!: FormGroup;
    notifyPlugin = NotifyPlugin();

    constructor(
        protected fb: FormBuilder,
        protected i18n: TranslationService,
        private userService: UserService,
        private router: Router
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required],
        });
    }

    async ngOnInit() {
        const user: IUser = await this.userService.me(true);

        this.form.get('name')?.setValue(user.name);
        this.form.get('surname')?.setValue(user.surname);
        this.form.get('email')?.setValue(user.email);
    }

    async onSubmit() {
        if (!this.form.valid) return;

        const user: IUser = await this.userService.me();

        const res: boolean = await this.userService.save(this.form.value);

        if (res) {
            this.notifyPlugin.notify.success(
                this.i18n.t(
                    'settings.account.personalInfo.form.generalities.messages.success'
                )
            );

            if (user.email != this.form.value.email) {
                this.router.navigate(['/logout']);
            }
        }
    }

    protected readonly environment = environment;
    protected readonly FieldType = FieldType;
    protected readonly onsubmit = onsubmit;
}
