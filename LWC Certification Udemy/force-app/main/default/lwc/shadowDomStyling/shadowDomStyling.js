import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    isLoaded = false

    renderedCallback() {
        if(!this.isLoaded) {
            return true;
        }
        const styleTag = document.createElement('style');
        styleTag.innerText = `
            c-shadow-dom-styling .slds-button {
                    background: black;
                    color: red;
            }
        `
        this.template.querySelector('lightning-button').appendChild(styleTag);
        this.isLoaded = true
    }
}