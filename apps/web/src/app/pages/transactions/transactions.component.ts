import {Component, OnInit} from '@angular/core'
import {ChartComponent} from "ng-apexcharts";
import {ButtonComponent} from "../../core/components/input/button/button.component";
import {BoxLayoutComponent} from "../../layouts/box-layout/box-layout.component";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PrimeNGConfig} from "primeng/api";
import {overlayOptions} from "../../core/types/popover";
import {FieldInputComponent} from "../../core/components/input/fields/field-input/field-input.component";
import {FieldType} from "../../core/types/fields";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddTransactionsComponent} from "../../core/components/modals/add-transactions/add-transactions.component";
import {BoxItemComponent} from "../../core/components/other/box-item/box-item.component";
import {
    UploadTransactionsComponent
} from "../../core/components/modals/upload-transactions/upload-transactions.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ChartComponent,
        ButtonComponent,
        BoxLayoutComponent,
        NgIf,
        Button,
        DialogModule,
        OverlayPanelModule,
        FieldInputComponent,
        AddTransactionsComponent,
        BoxItemComponent,
        UploadTransactionsComponent
    ],
    templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
    form: FormGroup

    visibleManualInsertModal: boolean = false;
    visibleManualUploadModal: boolean = true;

    toogleVisible(modal: "manual" | "upload", visible: boolean) {
        switch (modal) {
            case "manual":
                this.visibleManualInsertModal = visible;
                break
            case "upload":
                this.visibleManualUploadModal = visible;
                break
        }
    }

    constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {
        this.form = this.fb.group({
            search: ['', [Validators.required]],
        })
    }

    ngOnInit() {
        this.primengConfig.overlayOptions = overlayOptions
    }

    protected readonly FieldType = FieldType;
}
