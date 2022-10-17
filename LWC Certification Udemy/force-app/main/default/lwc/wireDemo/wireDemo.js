import { LightningElement, wire } from 'lwc';
import Id from "@salesforce/user/Id";
import { getRecord } from 'lightning/uiRecordApi';
export default class WireDemo extends LightningElement {
    userId = Id;
    userData;
    error;
    @wire(getRecord, {recordId : "0055i0000040hjkAAA", fields : ["User.Name", "User.Email"]})
    userDetailHandler({data, error}) {
        if(data) {
            this.userData = data.fields;
        } else {
            this.error = error
        }
    }
}