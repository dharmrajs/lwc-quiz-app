import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub';
export default class SubscriberCmp extends LightningElement {

    publisherData = "";

    constructor() {
        super();
        let returnValue = PubSub.subscribe("publisherCmpEvent", (publishedData)=> {
            this.publisherData = publishedData;
        });
        console.log("🚀 ~ file: subscriberCmp.js ~ line 11 ~ SubscriberCmp ~ returnValue ~ returnValue", returnValue);
        returnValue.takeSubscription();
    }
}