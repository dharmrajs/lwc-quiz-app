import { api, LightningElement } from 'lwc';
import ANIMATE_CSS_LIB from '@salesforce/resourceUrl/animateZipFolder';
import {loadStyle} from 'lightning/platformResourceLoader';
export default class MemoryTile extends LightningElement {
    @api
    tileNo;

    @api
    imagePath;

    @api
    memoryName; 
    
    isRenderedOnce = false;
    isCSSLibLoaded = false;
    renderedCallback() {
        if(!this.isRenderedOnce) {
            loadStyle(this, ANIMATE_CSS_LIB + '/animateZipFolder/animate.min.css').then( () => {
                this.isRenderedOnce = true;
                this.isCSSLibLoaded = true;
                console.log("Animate CSS Library Downloaded");
            });
        }
    }

    @api
    displayImage() {
        debugger;
        this.template.querySelector('.image-tile').classList.remove('hide-img-before-click');
        this.template.querySelector('.image-tile').classList.add('show-img-onclick');
        this.template.querySelector('.image-tile').classList.add('animate__animated');
        if(this.isCSSLibLoaded) {
            this.template.querySelector('.image-tile').classList.add('animate__bounce');
        }
    }

    @api
    resetTile() {
        this.template.querySelector('.image-tile').classList.add('hide-img-before-click');
        this.template.querySelector('.image-tile').classList.remove('animate__bounce');
        this.template.querySelector('.image-tile').classList.remove('show-img-onclick');
    }
}