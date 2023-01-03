import { LightningElement, track, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import CARHUBMC from '@salesforce/messageChannel/carHubMC__c';
import CAR_OBJECT from '@salesforce/schema/Cars__c';
import NAME_FIELD from '@salesforce/schema/Cars__c.Name';
import EX_SHOW_ROOM_PRICE from '@salesforce/schema/Cars__c.Exshowroom_Price__c';
import FUEL_TYPE from '@salesforce/schema/Cars__c.Fuel_Type__c';
import CATEGORY from '@salesforce/schema/Cars__c.Category__c';

export default class ViewCarDetail extends LightningElement {

	carObjectApiName = CAR_OBJECT;
	carNameField = NAME_FIELD;
	exshowRoomPrice = EX_SHOW_ROOM_PRICE;
	fuelType = FUEL_TYPE;
	category = CATEGORY;

	@wire(MessageContext)
	messageContext;

	subscription = null;
	@track
	carRecord;
	@track
	carRecordId;

	connectedCallback() {
		this.handleSubscribe();
	}

	handleSubscribe() {
		if(this.subscription) {
			return;
		}
		this.subscription = subscribe(this.messageContext, CARHUBMC, (lmsData)=> {
			debugger;
			this.carRecord = lmsData?.carRecord;
			this.carRecordId = lmsData?.carRecord?.Id;
		})
	}
}
