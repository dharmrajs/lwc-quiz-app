import { LightningElement, track, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import TITLE_FIELD from "@salesforce/schema/Contact.Title";
export default class GetListDemo extends LightningElement {

    @track
    contacts = [];
    @track
    displayColumnNames = [];
    error = null;
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;
    @wire(getListUi, { objectApiName : CONTACT_OBJECT, listViewApiName : "AllContacts", pageSize : 10,
        sortBy : TITLE_FIELD, pageToken : "$pageToken" })
    listViewProp({data, error}) {
        debugger;
        console.log("getListUiAdapter->", data);
        if(data) {
            this.contacts = data.records.records;
            this.displayColumnNames = data.info.displayColumns;
        } else {
            this.error = error;
        }
    }
}