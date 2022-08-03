import { api, LightningElement } from 'lwc';

export default class ShowContactChildComp extends LightningElement {

    @api
    conId = "";
    @api
    conObj = "";

    objectApiName="Contact";

    handleContactClick(evt) {
        const contactClickEvent = new CustomEvent("contactclick", {
            detail : {
                conId : this.conId,
            }
        });
        this.dispatchEvent(contactClickEvent);
    }

}