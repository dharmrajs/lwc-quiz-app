import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToExtPage extends LightningElement {
    
    handleNavToExternalPage(evt) {
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : "https://www.udemy.com/",
            }
        });
    }
}