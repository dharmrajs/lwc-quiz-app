import { api, LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';	
import CARHUBMC from "@salesforce/messageChannel/carHubMC__c";
export default class CarHubTile extends LightningElement {
	@api
	carRecord;

	@wire(MessageContext)
	messageContext;


	handleCarOnClick(eventObj) {
		debugger;
		console.log("🚀 ~ file: carHubTile.js:13 ~ CarHubTile ~ handleCarOnClick ~ eventObj", eventObj);
		this.publishCarRecord();
	}
	
	publishCarRecord() {
		let carRecObj = {
			carRecord : this.carRecord,
		};
		publish(this.messageContext, CARHUBMC, carRecObj);
	}
}
