import {Component, Input} from '@angular/core';
import {ITransaction} from "../../../types/transaction";
import {ISubscription} from "../../../types/subscription";
import {IBankAccount} from "../../../types/bankAccount";

@Component({
    selector: 'box-item',
    standalone: true,
    imports: [],
    templateUrl: './box-item.html',
})
export class BoxItemComponent {
    @Input() data!: ITransaction | ISubscription | IBankAccount;
    @Input() type: 'transaction' | 'subscription' | 'bankaccount' = 'transaction'
    @Input() mode!: "widget" | "full";

    // protected readonly renderCurrency = renderCurrency;
}
