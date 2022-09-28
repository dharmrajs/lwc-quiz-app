import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    childData = null;

    @api
    get detail() {
        return this.childData;
    }
    set detail(childData) {
        this.childData = {...childData, doubleAge : 2*childData.age, location : "Pune"};
    }
}