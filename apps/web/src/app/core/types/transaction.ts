import {IItem} from "./item";

export interface ITransaction {
    name: string
    date: string
    logo?: string
    action: TransactionAction
    amount: number
    currency: string
    bankAccount?: string
    from?: string
    to?: string
    category: string
    subcategory: string
}

export enum TransactionAction {
    INTERNAL,
    ADD,
    SUB
}

export const TransactionActionItem: IItem[] = [
    {value: TransactionAction.INTERNAL, label: 'Giroconto'},
    {value: TransactionAction.ADD, label: 'Entrata'},
    {value: TransactionAction.SUB, label: 'Uscita'}
]