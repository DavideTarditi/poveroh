import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerPlugin from '../plugin/server.plugin';
import { IItem, IUser, ServerRequest, TransactionAction } from '@poveroh/types';
import { TranslationService } from './translation.services';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    private server = ServerPlugin();

    constructor(private http: HttpClient, private i18n: TranslationService) {}

    readTransactionAction(): IItem[] {
        return [
            {
                value: TransactionAction.INTERNAL,
                label: this.i18n.t('transactions.types.internalTransfer'),
            },
            {
                value: TransactionAction.INCOME,
                label: this.i18n.t('transactions.types.income'),
            },
            {
                value: TransactionAction.EXPENSES,
                label: this.i18n.t('transactions.types.expenses'),
            },
        ];
    }

    async me(): Promise<IUser> {
        return await this.server.send<IUser>(
            ServerRequest.POST,
            '/user/me',
            {},
            'me'
        );
    }
}
