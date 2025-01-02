import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AbstractControl,
    FormControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { FieldType, IItem, PHONE_REGEX } from '@poveroh/types';
import { FieldsService } from '../../../../services/fields.services';
import { TranslationService } from '../../../../services/translation.services';

@Component({
    selector: 'field-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatIcon],
    templateUrl: './field-input.component.html',
})
export class FieldInputComponent implements OnInit {
    @Input() options: IItem[] = [];
    @Input() disabled: boolean = false;
    @Input() showErrorMessage: boolean = true;
    @Input() smallText: boolean = false;
    @Input() whiteBorder: boolean = false;

    @Input() label = '';
    @Input() subtitle = '';
    @Input() placeholder!: string;
    @Input({ required: true }) id = '';
    @Input({ required: true }) type: FieldType = FieldType.TEXT;
    @Input() errorMessages: { [key: string]: string } = {};

    @Input()
    get control(): AbstractControl {
        return this._control;
    }

    //number
    @Input() min: number = 0;
    @Input() max: number = 0;
    @Input() step: number = 0.1;

    required = false;
    private _control!: AbstractControl;

    //password
    passwordVisibility: boolean = false;

    protected localType: FieldType = FieldType.TEXT;
    protected readonly FieldType: typeof FieldType = FieldType;

    constructor(private fieldService: FieldsService, protected i18n: TranslationService) {}

    ngOnInit() {
        this.localType = this.type;
        this.placeholder =
            this.placeholder ??
            this.fieldService.getPlaceholder(this.localType);
        this.required = this.control.hasValidator(Validators.required);

        switch (this.localType) {
            case FieldType.PASSWORD:
                // this.control.addValidators(Validators.pattern(PASSWORD_REGEX));
                break;
            case FieldType.EMAIL:
                this.control.addValidators(Validators.email);
                break;
            case FieldType.PHONE:
                this.control.addValidators(Validators.pattern(PHONE_REGEX));
                break;
            case FieldType.MONEY:
                this.min = 0;
                this.step = 0.001;
                this.max = 100000000000000;
                this.localType = this.type = FieldType.NUMBER;
                this.control.addValidators([
                    Validators.min(this.min),
                    Validators.max(this.max),
                ]);
                break;
            case FieldType.NUMBER:
                this.control.addValidators([
                    Validators.min(this.min),
                    Validators.max(this.max),
                ]);
                break;
        }

        this.control.valueChanges.subscribe((v) => {});
    }

    getInputClass(): string {
        switch (this.localType) {
            case FieldType.UPLOAD:
                return 'input-file';
            case FieldType.BOOLEAN:
                return 'inp-cbx';
            default:
                return 'form-input';
        }
    }

    set control(value: AbstractControl) {
        this._control = value;
    }

    protected getFormControl(): FormControl {
        return this.control as FormControl;
    }

    get isInvalid(): boolean {
        return (
            this.control?.invalid &&
            (this.control?.touched || this.control?.dirty)
        );
    }

    get errors(): string[] {
        if (!this.control?.errors) return [];
        return Object.keys(this.control.errors).map(
            (key) =>
                this.errorMessages[key] ||
                this.fieldService.getDefaultErrorMessage(key)
        );
    }

    toogleVisibility(): void {
        this.passwordVisibility = !this.passwordVisibility;
        this.type = this.passwordVisibility ? FieldType.TEXT : this.localType;
    }
}
