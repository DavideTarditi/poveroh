import { Component } from "@angular/core"
import { FieldType } from "../../core/types/fields"
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { FieldInputComponent } from "../../core/components/input/fields/field-input/field-input.component"
import { IItem } from "../../core/types/item"
import { currencyCatalog } from "../../core/types/general"
import { ButtonComponent } from "../../core/components/input/button/button.component"
import { DialogModule } from "primeng/dialog"
import { TimelineModule } from "primeng/timeline"
import { SelectButtonComponent } from "../../core/components/input/select-button/select-button.component"

@Component({
    selector: 'app-test-input',
    standalone: true,
    imports: [
        FieldInputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        DialogModule,
        TimelineModule,
        FormsModule,
        SelectButtonComponent
    ],
    templateUrl: "./test-input.component.html"
})
export class TestInputComponent {
    form: FormGroup

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    events: any[];

    loading: boolean = false

    countryOptions: IItem[] = [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "ca", label: "Canada" }
    ];

    dataYears: IItem[] = [
        { value: 2022, label: "2022" },
        { value: 2023, label: "2023" },
        { value: 2024, label: "2024" },
        { value: -1, label: "Max" }
    ];

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
            upload: ['', Validators.required],
            ignore: [false],
            ignoretwo: [false],
        });

        this.events = [
            {
                status: 'Ordered',
                date: '15/10/2020 10:30',
                icon: 'pi pi-shopping-cart',
                color: '#9C27B0',
                image: "game-controller.jpg"
            },
            {
                status: "Processing",
                date: "15/10/2020 14:00",
                icon: "pi pi-cog",
                color: "#673AB7"
            },
            {
                status: "Shipped",
                date: "15/10/2020 16:15",
                icon: "pi pi-shopping-cart",
                color: "#FF9800"
            },
            {
                status: "Delivered",
                date: "16/10/2020 10:00",
                icon: "pi pi-check",
                color: "#607D8B"
            }
        ];
    }

    onSubmit() {
        if (this.form.valid) {
            console.log("Form submitted:", this.form.value)
        }
    }

    protected readonly FieldType = FieldType
    protected readonly currencyCatalog = currencyCatalog;
}
