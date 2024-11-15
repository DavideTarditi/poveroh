interface ITransaction {
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

enum TransactionAction {
    INTERNAL,
    ADD,
    SUB
}