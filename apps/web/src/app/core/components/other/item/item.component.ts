import {Component, Input} from '@angular/core';

@Component({
  selector: 'transaction-item',
  standalone: true,
  imports: [],
  templateUrl: './item.html',
})
export class ItemComponent {
  @Input() data!: ITransaction | ISubscription;
  protected readonly renderCurrency = renderCurrency;
}
