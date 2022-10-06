import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToRelatedList extends NavigationMixin(LightningElement) {

    handleNavigateToRelatedList(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__recordRelationshipPage",
            attributes : {
                recordId : "0015i00000OvNd4AAF",
                objectApiName : "Account",
                relationshipApiName : "Contact",
                actionView : "view"
            }
        })
    }
}