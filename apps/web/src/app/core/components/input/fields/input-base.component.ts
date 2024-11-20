import {Directive, Input} from '@angular/core'
import {AbstractControl, FormControl} from '@angular/forms'
import {getDefaultErrorMessage} from '../../../services/fields'
import {FieldType} from '../../../types/fields'

@Directive()
export abstract class BaseInputComponent {
    @Input() label = ''
    @Input() subtitle = ''
    @Input() placeholder!: string
    @Input({required: true}) id = ''
    @Input({required: true}) type: FieldType = FieldType.TEXT
    @Input() errorMessages: { [key: string]: string } = {}

    @Input()
    get control(): AbstractControl {
        return this._control
    }

    required = false
    private _control!: AbstractControl

    set control(value: AbstractControl) {
        this._control = value
    }

    protected getFormControl(): FormControl {
        return this.control as FormControl
    }

    get isInvalid(): boolean {
        return this.control?.invalid && (this.control?.touched || this.control?.dirty)
    }

    get errors(): string[] {
        if (!this.control?.errors) return []
        return Object.keys(this.control.errors).map(key => this.errorMessages[key] || getDefaultErrorMessage(key))
    }
}
