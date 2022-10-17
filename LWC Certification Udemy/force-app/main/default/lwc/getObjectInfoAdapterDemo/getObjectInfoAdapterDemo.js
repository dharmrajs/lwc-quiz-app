import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class GetObjectInfoAdapterDemo extends LightningElement {

    objectData;
    error;
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfoData({data, error}) {
        if(data) {
            this.objectData = data;
        } else {
            this.error = error;
        }
    }
}