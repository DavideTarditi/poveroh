import {Component} from '@angular/core'
import {FieldType} from '../../core/types/fields'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {FieldInputComponent} from '../../core/components/input/fields/field-input/field-input.component'
import {IItem} from '../../core/types/item'
import {currencyCatalog} from "../../core/types/general";
import {ButtonComponent} from "../../core/components/input/button/button.component";

@Component({
    selector: 'app-test-input',
    standalone: true,
    imports: [
        FieldInputComponent,
        ReactiveFormsModule,
        ButtonComponent
    ],
    templateUrl: './test-input.component.html'
})
export class TestInputComponent {
    form: FormGroup

    countryOptions: IItem[] = [
        {value: 'us', label: 'United States'},
        {value: 'uk', label: 'United Kingdom'},
        {value: 'ca', label: 'Canada'}
    ]

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
        })
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Form submitted:', this.form.value)
        }
    }

    protected readonly FieldType = FieldType
    protected readonly currencyCatalog = currencyCatalog;
}