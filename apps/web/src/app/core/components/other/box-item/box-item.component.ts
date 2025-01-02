import { Component, Input } from '@angular/core';
import { IBankAccount, ISubscription, ITransaction } from '@poveroh/types';

@Component({
    selector: 'box-item',
    standalone: true,
    imports: [],
    templateUrl: './box-item.html',
})
export class BoxItemComponent {
    @Input() data!: ITransaction | ISubscription | IBankAccount;
    @Input() type: 'transaction' | 'subscription' | 'bankaccount' =
        'transaction';
    @Input() mode!: 'widget' | 'full';

    // protected readonly renderCurrency = renderCurrency;
}
