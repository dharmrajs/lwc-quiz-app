import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJ from "@salesforce/schema/Contact";
import ShowToastEvent from "lightning/platformShowToastEvent"
const BOOKAPIURL = "https://www.googleapis.com/books/v1/volumes?q=mark";
export default class CreateRecordDemo extends LightningElement {
    
    query = "Mark";
    bookData = null;
    formFields={};
    changeHandler(evt) {
        const {name, value} = evt.target;
        this.formFields[name] = value;
    }

    constructor() {
        super();
        this.fetchBookData();
    }

    fetchBookData() {
        fetch(BOOKAPIURL, {
            method :"post",
            headers : {},
            body : ""
        }).then(response => {
            response.json();
        }).then(data => {
            this.bookData = data;
            console.log(data);
        })
    }

    createContact(evt) {
        debugger;
        const recordInput = { apiName : CONTACT_OBJ.objectApiName, fields : this.formFields}
        createRecord(recordInput).then(result => {
            this.showToast("SUCCESS!!!", "Contact Created", "success");
            this.formFields = {};
            this.template.querySelector("form.createForm").reset();
        }).catch(error => {
            this.showToast("ERROR!!!", "Could Not Create Contact", "error");
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title : title,
            message : message,
            variant : variant
        }));
    }
}