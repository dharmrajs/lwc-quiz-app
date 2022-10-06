import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToLWC extends LightningElement {

    handleNavigateToLWC() {
        let defDetail = {
            componentDef : "c:gameBoard",
        };
        this[NavigationMixin.Navigate]({
            type : "standard__webPage",
            attributes : {
                url : "/one/one.app#"+btoa(JSON.stringify(defDetail)),
            }
        })
    }
}