import { Component, Input } from "@angular/core"
import { FieldType } from "../../../types/fields"
import { FieldInputComponent } from "../../input/fields/field-input/field-input.component"
import { FormGroup, ReactiveFormsModule } from "@angular/forms"
import { IItem } from "../../../types/item"
import { ButtonComponent } from "../../input/button/button.component"
import { ConfirmPopupModule } from "primeng/confirmpopup"
import { ToastModule } from "primeng/toast"
import { ConfirmationService, MessageService } from "primeng/api"
import { OverlayPanelModule } from "primeng/overlaypanel"
import { NgIf } from "@angular/common"
import { MultiFormComponent } from "../multi-form/multi-form.component"

@Component({
    selector: 'upload-form',
    standalone: true,
    imports: [
        FieldInputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        ConfirmPopupModule,
        ToastModule,
        OverlayPanelModule,
        MultiFormComponent,
        NgIf
    ],
    providers: [ConfirmationService, MessageService],
    templateUrl: './upload-form.component.html',
})
export class UploadFormComponent {
    @Input() form!: FormGroup;
    @Input() whiteBorder: boolean = false;

    bankAccount: IItem[] = [
        { value: "satispay", label: "Satispay" },
        { value: "revolut", label: "Revolut" },
        { value: "traderepublic", label: "Trade Republic" }
    ];

    category: IItem[] = [
        { value: "food", label: "Cibo" },
        { value: "vestiti", label: "Vistiti" },
        { value: "salute", label: "Salute" }
    ];

    subCategory: IItem[] = [
        { value: "bar", label: "Bar" },
        { value: "zara", label: "Zara" },
        { value: "dentista", label: "Dentista" }
    ];

    onSubmit() {}

    protected readonly FieldType = FieldType;
}
