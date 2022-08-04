import { LightningElement } from 'lwc';

export default class GrandParentCmp extends LightningElement {


    currentlyActiveChild = "";
    maxChild = "";

    constructor() {
        super();
        console.log("Grandparent Constructor Called");
        this.currentlyActiveChild = 0;
        this.maxChild = 3;
    }

    connectedCallback() {
        console.log("Grandparent ConnectedCallback Called");
    }

    handleResetBtn(evt) {
        debugger;
        this.currentlyActiveChild = 0;
        this.template.querySelector("c-parent-cmp").resetStatus();
        //this.template.querySelector("c-parent-cmp").this.template.querySelector("c-child-cmp").resetBtnToDefault();
    }

    handleChildSelection(evt) {
        debugger;
        if(this.currentlyActiveChild < this.maxChild) {
            this.currentlyActiveChild++;
        } 
    }

    handleDeslectEvt(evt) {
        debugger;
        if(this.currentlyActiveChild < this.maxChild && this.currentlyActiveChild > 0) {
            this.currentlyActiveChild--;
        }
    }

}