import { LightningElement } from 'lwc';

export default class GrandParentCmp extends LightningElement {


    currentlyActiveChild = "";
    maxChild = "";

    constructor() {
        console.log("Constructor Called");
        this.currentlyActiveChild = 0;
        this.maxChild = 3;
    }

    connectedCallback() {
        console.log("ConnectedCallback Called");
    }

    handleResetBtn(evt) {
        this.currentlyActiveChild = 0;
    }

}