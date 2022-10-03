import { LightningElement } from 'lwc';
import MOMENTLIB from "@salesforce/resourceUrl/momentZipFolder";
import {loadScript} from "lightning/platformResourceLoader";
export default class ThirdPartyFiles extends LightningElement {

    currentData;
    isLibLoaded = false
    renderedCallback() {
        if(!this.isLibLoaded) {
            Promise.all([
                loadScript(this, MOMENTLIB + '/moment/moment.js')
            ]).then(( () => {
                this.setDateOnScreen();
            }));
            this.isLibLoaded = true;
        }
    }

    setDateOnScreen() {
        this.currentData = moment().format("LLLL");
    }

}