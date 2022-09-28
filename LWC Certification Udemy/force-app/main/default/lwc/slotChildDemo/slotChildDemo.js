import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {

    handleSlotDataChange() {
        this.template.querySelector(".slds-card__footer")?.classList.remove("slds-hide");
    }
}