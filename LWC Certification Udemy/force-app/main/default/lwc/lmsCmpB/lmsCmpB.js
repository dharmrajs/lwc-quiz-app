import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { subscribe, MessageContext, APPLICATION_SCOPE,  } from 'lightning/messageService';
export default class LmsCmpB extends LightningElement {
    
    @wire(MessageContext)
    context;

    recievedMsg;
    

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message)
        }, { scope : APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.recievedMsg = message?.lmsData?.value;
    }


}