import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import ACCOUNT_TYPE_FIELD from "@salesforce/schema/Account.Type";
import ACCOUNT_INDUSTRY_FIELD from "@salesforce/schema/Account.Industry"
export default class RecordFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    accObjFieldNames = [
        ACCOUNT_NAME_FIELD, ACCOUNT_REVENUE_FIELD, ACCOUNT_TYPE_FIELD, ACCOUNT_INDUSTRY_FIELD
    ];
    successHandler(evt) {
        this.dispatchEvent(new ShowToastEvent({
            title : "Account Created",
            mssage : "Record Created with Id : " + evt.detail.id,
            variant : "Success"
        }));
    }
}