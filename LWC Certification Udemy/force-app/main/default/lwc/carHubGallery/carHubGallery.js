import { LightningElement, wire } from 'lwc';
import  getCarRecords  from '@salesforce/apex/CarHubController.getCarRecords';
import CAR_HUB_FILTER_MC from '@salesforce/messageChannel/carHubFilterMC__c';
import { subscribe, MessageContext } from 'lightning/messageService';
export default class CarHubGallery extends LightningElement {

	carCollections;
	errors;

	@wire(MessageContext)
	messageContext;
	subscription = null;

	@wire(getCarRecords)
	carRecords({error, data}) {
		console.log("🚀 ~ file: carHubGallery.js:16 ~ CarHubGallery ~ carRecords ~ data", data);
		if(data) {
			debugger;
			this.carCollections = data;
		} else if(error) {
			this.errors = error;
		}
	}

	connectedCallback() {
		this.subscribeToFilterLMS();
	}

	subscribeToFilterLMS() {
		if(this.subscription) {
			return;
		}
		this.subscription = subscribe(this.messageContext, CAR_HUB_FILTER_MC, (filterAppliedLMSData)=> {
			debugger;
			this.applyUserSelectedFilter(filterAppliedLMSData.lmsData);
		})
	}

	applyUserSelectedFilter(filterObjReceived) {
		debugger;
		console.log("🚀 ~ file: carHubGallery.js:37 ~ CarHubGallery ~ applyUserSelectedFilter ~ filterObjReceived", filterObjReceived);
		const appliedCarFilterData = [];
		const selectedMakes = [];
		const selectedCategories = [];
		let maxPriceRange = filterObjReceived?.maxPrice;
		let searchKey = filterObjReceived?.searchKey;
		for(const objKey in filterObjReceived) {
			if (objKey === "category" || objKey === "make") {
				if(objKey==="category") {
					for(const catKey in filterObjReceived[objKey]) {
						if (filterObjReceived[objKey][catKey].isSelected) {
							selectedCategories.push(catKey);
						}
					}
				} else if(objKey==="make") {
					for (const makeKey in filterObjReceived[objKey]) {
						if (filterObjReceived[objKey][makeKey].isSelected) {
							selectedMakes.push(makeKey);
						}
					}
				}
			}
		}
		console.log("🚀 ~ file: carHubGallery.js:50 ~ CarHubGallery ~ applyUserSelectedFilter ~ selectedCategories", selectedCategories);
		console.log("🚀 ~ file: carHubGallery.js:56 ~ CarHubGallery ~ applyUserSelectedFilter ~ selectedMakes", selectedMakes);		
		for(const carKeys in this.carCollections) {
			if (this.carCollections[carKeys].Name === searchKey || (maxPriceRange > 0 &&
				this.carCollections[carKeys].Exshowroom_Price__c < maxPriceRange) ||
				selectedMakes.includes(this.carCollections[carKeys].Make__c) ||
				selectedCategories.includes(this.carCollections[carKeys].Category__c)) {
					appliedCarFilterData.push(this.carCollections[carKeys]);
				}
		}
		this.carCollections = appliedCarFilterData;
	}
}
