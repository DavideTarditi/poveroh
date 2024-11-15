function renderCurrency(currency: string) {
    switch (currency.toLowerCase()) {
        case 'usd':
            return '&dollar;';
        case 'eur':
            return '&euro;';
        default:
            return '';
    }
}