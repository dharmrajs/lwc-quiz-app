import { LightningElement, track, wire } from 'lwc';
import getBusinesess from '@salesforce/apex/GetBusinessController.getBusinesess';
import getBusinesessContacts from '@salesforce/apex/GetBusinessController.getBusinesessContacts';
export default class AccountParentCmp extends LightningElement {

    selectedAccId = "";

    @track
    resultAccList = [];
    @track
    contactList = [];
    contactListError = "";
    resultAccListError = "";

    connectedCallback() {
        this.callGetBusinessMethod();
    }

    callGetBusinessMethod() {
        getBusinesess().then(resultAccList => {
            console.log("🚀 ~ file: accountParentCmp.js ~ line 15 ~ AccountParentCmp ~ getBusinesess ~ resultAccList", resultAccList);
            console.log("type of resultAccList", typeof resultAccList);
            if(typeof resultAccList === "Array") {
                resultAccList.forEach(accObj => {
                    resultAccList.push({
                       label : accObj.Name,
                       value : accObj.Id,
                    });
                });
            }
        }).catch(resultError => {
            this.resultAccListError = resultError;
            this.resultAccList = undefined;
        });
    }

    @wire(getBusinesessContacts, { accId : "$selectedAccId" })
    wiredContactList({data, error}) {
        if(data) {
            this.contactList = data;
        } else if(error) {
            console.log("🚀 ~ file: accountParentCmp.js ~ line 42 ~ AccountParentCmp ~ wiredContactList ~ error", error);
            this.contactListError = error;
            this.contactList = undefined;
        }
    } 

    handleAccountChange(evt) {
        console.log("🚀 ~ file: accountParentCmp.js ~ line 36 ~ AccountParentCmp ~ handleAccountChange ~ evt.detail.value", evt.detail.value);        
        this.selectedAccId = evt.detail.value;
    }

    handleContactClick(evt) {
        console.log("🚀 ~ file: accountParentCmp.js ~ line 54 ~ AccountParentCmp ~ handleContactClick ~ evt", evt.detail.conId);
    }
}