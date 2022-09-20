import { api, LightningElement, track } from 'lwc';

export default class LifeCycleHookParent extends LightningElement {

    @track
    trackableProp;

    @api
    publicProp;


    renderBtn = true

    constructor() {
        super();
        console.log("Parent Constructor");
        this.trackableProp = "Parent Trackable Property";
        this.publicProp = "Parent Public Property";
    }

    connectedCallback() {
        console.log("Parent Connected Callback");
    }

    renderedCallback() {
        console.log("Parent Rendered Callback");
    }

    disconnectedCallback() {
        console.log("Parent Disconnected Callback");
    }

    handleClick() {
        this.renderBtn = false;
    }
}