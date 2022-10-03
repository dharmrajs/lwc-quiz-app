import { LightningElement } from 'lwc';
import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency"
export default class InternationalizationCmp extends LightningElement {

    pi = 3.144385;
    formattedNumber = new Intl.NumberFormat(LOCALE, {
        style : 'currency',
        currency : CURRENCY,
        currencyDisplay : 'symbol'
    }).format(this.number);
}