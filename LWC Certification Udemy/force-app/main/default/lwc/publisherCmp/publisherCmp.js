import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub'
export default class PublisherCmp extends LightningElement {

    onBlurHandler(evt) {
        debugger;
        PubSub.publish("publisherCmpEvent", evt?.target?.value);
    }

}