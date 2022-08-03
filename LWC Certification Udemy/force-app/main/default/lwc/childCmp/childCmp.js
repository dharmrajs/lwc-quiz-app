import { LightningElement } from 'lwc';

export default class ChildCmp extends LightningElement {

    childName = "";
    childId = "";
    childStatus = "";

    constructor() {
        console.log("Child Constructor");
        this.childName = "";
        this.childId = "";
        this.childStatus = "";
    }

    connectedCallback() {
        console.log("Child ConnectedCallback");
    }

    handleSelectBtn(evt) {

    }
}