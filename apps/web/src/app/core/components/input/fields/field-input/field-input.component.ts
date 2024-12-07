import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldType } from '../../../../types/fields';
import { getPlaceholder } from '../../../../services/fields';
import { BaseInputComponent } from '../input-base.component';
import { IItem } from '../../../../types/item';
import { PASSWORD_REGEX, PHONE_REGEX } from '../../../../types/constants';

@Component({
    selector: 'field-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './field-input.component.html',
})
export class FieldInputComponent extends BaseInputComponent implements OnInit {
    @Input() options: IItem[] = [];
    @Input() disabled: boolean = false;
    @Input() showErrorMessage: boolean = true;
    @Input() smallText: boolean = false;
    @Input() whiteBorder: boolean = false;

    //number
    @Input() min: number = 0;
    @Input() max: number = 0;
    @Input() step: number = 0.1;

    //password
    passwordVisibility: boolean = false;

    protected localType: FieldType = FieldType.TEXT;
    protected readonly FieldType: typeof FieldType = FieldType;

    constructor() {
        super();
    }

    ngOnInit() {
        this.localType = this.type;
        this.placeholder = this.placeholder ?? getPlaceholder(this.localType);
        this.required = this.control.hasValidator(Validators.required);

        switch (this.localType) {
            case FieldType.PASSWORD:
                this.control.addValidators(Validators.pattern(PASSWORD_REGEX));
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

        this.control.valueChanges.subscribe((v) => {
            console.log('Changed value', v);
        });
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

    toogleVisibility(): void {
        this.passwordVisibility = !this.passwordVisibility;
        this.type = this.passwordVisibility ? FieldType.TEXT : this.localType;
    }
}
