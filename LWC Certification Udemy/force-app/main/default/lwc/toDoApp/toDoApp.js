import { LightningElement } from 'lwc';

export default class ToDoApp extends LightningElement {

    actionBtnLabel = "";

    constructor() {
        super();
        this.actionBtnLabel = "Refresh Your TODOs";
    }

}