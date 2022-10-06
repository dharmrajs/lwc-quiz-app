import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation"
export default class NavigateToTab extends NavigationMixin(LightningElement) {

    navigateToTab(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__navItemPage",
            attributes : {
                apiName : "Account"
            }
        })
    }

}