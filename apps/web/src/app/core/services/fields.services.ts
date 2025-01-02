import { FieldType } from '@poveroh/types';
import { TranslationService } from './translation.services';
import { Injectable } from '@angular/core';
import ServerPlugin from '../plugin/server.plugin';

@Injectable({
    providedIn: 'root',
})
export class FieldsService {
    private server = ServerPlugin();

    constructor(private i18n: TranslationService) {}

    getDefaultValue(fieldType: FieldType): number | string | boolean {
        switch (fieldType) {
            case FieldType.NUMBER:
                return 0;
            case FieldType.BOOLEAN:
                return false;
            default:
                return '';
        }
    }

    getPlaceholder(fieldType: FieldType): string {
        switch (fieldType) {
            case FieldType.EMAIL:
                return 'example@email.com';
            case FieldType.PASSWORD:
                return `${String.fromCharCode(8226).repeat(4)}`;
            case FieldType.PHONE:
                return '+01 000 000 0000';
            case FieldType.NUMBER:
                return '0';
            case FieldType.MONEY:
                return '0,000';
            case FieldType.LONGTEXT:
                return 'Inserisci una nota';
            default:
                return '';
        }
    }

    getDefaultErrorMessage(error: string): string {
        let defaultMessages: { [key: string]: string } = {};

        this.i18n
            .translateKey('messages.errors')
            .subscribe((x) => (defaultMessages = x));

        return defaultMessages[error] || 'Invalid input';
    }
}
