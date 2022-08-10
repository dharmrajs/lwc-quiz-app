import { api, LightningElement } from 'lwc';
import SLDS_ICONS_PATH from '@salesforce/resourceUrl/slds_icons'
export default class ToDoItem extends LightningElement {

    deleteBtnPath = "";
    @api
    toDoTask = "";

    constructor() {
        super();
        this.deleteBtnPath = SLDS_ICONS_PATH + "/utility/delete";//Get the path from Static resource
        this.toDoTask = "";
    }
}