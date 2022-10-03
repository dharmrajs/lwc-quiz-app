import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, publish } from 'lightning/messageService';
export default class LmsCmpA extends LightningElement {


    valueToPublish;

    @wire(MessageContext)
    context
    
    inputHandler(evt) {
        this.valueToPublish = evt?.target?.value;
    }
    
    PublishMessage() {
        const messgaeToPass = {
            lmsData : {
                value : this.valueToPublish,
            }
        };
        publish(this.context, SAMPLEMC, messgaeToPass);
    }
}