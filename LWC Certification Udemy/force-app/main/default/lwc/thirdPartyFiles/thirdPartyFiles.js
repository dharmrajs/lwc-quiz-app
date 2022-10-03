import { LightningElement } from 'lwc';
import MOMENTLIB from "@salesforce/resourceUrl/momentZipFolder";
import ANIMATE_LIB from "@salesforce/resourceUrl/animateZipFolder";
import {loadScript, loadStyle} from "lightning/platformResourceLoader";
export default class ThirdPartyFiles extends LightningElement {

    currentData;
    isLibLoaded = false
    renderedCallback() {
        if(!this.isLibLoaded) {
            Promise.all([
                loadScript(this, MOMENTLIB + '/moment/moment.js'),
                loadStyle(this, ANIMATE_LIB + '/animateZipFolder/animate.min.css')
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