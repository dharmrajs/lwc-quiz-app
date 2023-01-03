import { api, LightningElement, wire } from 'lwc';
import MIN_MAX_VALUE from '@salesforce/label/c.CAR_FILTER_MIN_MAX_VALUE';

import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Cars__c';
import CATEGORY_FIELD from '@salesforce/schema/Cars__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Cars__c.Make__c';

import CAR_HUB_FILTER_MC from '@salesforce/messageChannel/carHubFilterMC__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class FiltersCmp extends LightningElement {


    MIN_ALLOWED_PRICE = MIN_MAX_VALUE.split("-")[0];
    MAX_ALLOWED_PRICE = MIN_MAX_VALUE.split("-")[1];
    publishObj = {
        searchKey : 'NA',
        minPrice : this.MIN_ALLOWED_PRICE,
        maxPrice : 'NA',
        category : {
            SUV : {
                isSelected : true
            },
            Sedan : {
                isSelected: true
            },
            Hatchbag : {
                isSelected: true
            },
            Truck : {
                isSelected: true
            },

        },
        make : {
            frd : {
                isSelected: true
            },
            hyd: {
                isSelected: true
            },
            msz : {
                isSelected: true
            },
            TATA : {
                isSelected: true
            },
            nsn : {
                isSelected: true
            },
            Audi : {
                isSelected: true
            },
            BMW : {
                isSelected: true
            },
        }
    };
    sliderDefaultValue = 100000;

    @wire(MessageContext)
    messageContext;

    @api
    categoryOpts;
    @api
    makeOpts;


    @wire(getObjectInfo, {objectApiName : CAR_OBJECT})
    carObjectData;

    @wire(getPicklistValues, {recordTypeId : '$carObjectData.data.defaultRecordTypeId', fieldApiName : CATEGORY_FIELD})
    categories;

    @wire(getPicklistValues, {recordTypeId : '$carObjectData.data.defaultRecordTypeId', fieldApiName : MAKE_FIELD})
    make;

    handleSearchOnBlur(eventObj) {
        console.log(eventObj);
        this.publishObj.searchKey = eventObj.target?.value;
        console.log("🚀 ~ file: filtersCmp.js:41 ~ FiltersCmp ~ handleOnSearchBlur ~ publishObj", this.publishObj);
        this.publishAppliedFilter();
    }

    handleSliderChange(eventObj) {
        debugger;
        console.log(eventObj);
        this.publishObj.maxPrice = eventObj.detail?.value;
        console.log("🚀 ~ file: filtersCmp.js:49 ~ FiltersCmp ~ handleSliderChange ~ publishObj", this.publishObj);
        this.publishAppliedFilter();
    }

    handleCategoryChange(eventObj) {
        debugger;
        console.log(eventObj);
        const category = eventObj?.target?.dataset.value;
        const isChecked = eventObj?.target.checked;
        this.publishObj.category[category].isSelected = isChecked;
        //this.publishObj.category = eventObj?.target.dataset.value;
        console.log("🚀 ~ file: filtersCmp.js:43 ~ FiltersCmp ~ handleCategoryChange ~ publishObj", this.publishObj);
        this.publishAppliedFilter();
    }

    handleMakeChange(eventObj) {
        debugger;
        console.log(eventObj);
        const make = eventObj?.target.dataset.value;
        const isChecked = eventObj?.target.checked;
        this.publishObj.make[make].isSelected = isChecked;
        //this.publishObj.make = eventObj?.target.dataset.value;
        console.log("🚀 ~ file: filtersCmp.js:49 ~ FiltersCmp ~ handleMakeChange ~ publishObj", this.publishObj);        
        this.publishAppliedFilter();
    }

    publishAppliedFilter() {
        debugger;
        console.log("publishObj before publishing=>", this.publishObj);
        const lmsData = {
            lmsData : this.publishObj,
        }
        publish(this.messageContext, CAR_HUB_FILTER_MC, lmsData);
    }
}
