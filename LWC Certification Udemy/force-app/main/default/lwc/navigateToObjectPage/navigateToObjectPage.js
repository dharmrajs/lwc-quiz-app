import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation"
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    handleNavigateToObject(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Contact",
                actionName : "new",                
            }
        });
    }

    handleNavigateToObjectWithDefaultValue(evt) {
        const defaultValue = encodeDefaultFieldValues({
            FirstName : "Viru",
            LastName : "Sahastrabudhe",
            LeadSource : "Other",
        })
        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Contact",
                actionName : "new",                
            },
            state : {
                defaultFieldValue : defaultValue
            }
        });
    }
    
    handleNavigateToList(evt) {
        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Contact",
                actionName : "list",                
            }
        });
    }
    
}