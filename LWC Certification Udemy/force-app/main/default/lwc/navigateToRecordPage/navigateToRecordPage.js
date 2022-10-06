import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation"
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    navigateToRecordPageViewMode(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__recordPage",
            attributes : {
                recordId : "0035i000009FbYzAAK",
                objectApiName : "Contact",
                actionName : "view"
            }
        })
    }
    navigateToRecordPageEditMode(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__recordPage",
            attributes : {
                recordId : "0035i000009FbYzAAK",
                objectApiName : "Contact",
                actionName : "edit"
            }
        })
    }
}