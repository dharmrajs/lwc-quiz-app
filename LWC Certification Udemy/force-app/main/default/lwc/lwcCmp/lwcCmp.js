import { api, LightningElement } from 'lwc';

export default class LwcCmp extends LightningElement {

    @api
    auraMsg;

    sendMsg(evt) {
        this.dispatchEvent(new CustomEvent("msgtoaura", {
            detail: {
                msg : "FROM LWC"
            }
        }))
    }
}