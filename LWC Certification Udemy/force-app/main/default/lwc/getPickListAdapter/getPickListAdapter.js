import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
export default class GetPickListAdapter extends LightningElement {

    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo

    pickListVals;
    error;

    @wire(getPicklistValues, {recordTypeId : "$objectInfo.data.defaultRecordTypeId", fieldApiName : INDUSTRY_FIELD})
    industryPickListValues({data, error}) {
        if(data) {
            this.pickListVals = data;
        } else {
            this.error = error;
        }
    }

}