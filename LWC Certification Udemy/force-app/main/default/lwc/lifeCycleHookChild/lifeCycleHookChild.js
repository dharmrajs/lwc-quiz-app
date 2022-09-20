import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {

    childProp = 'Child Property';


    constructor() {
        super();
    }


    connectedCallback() {
        console.log("Child Connected Callback");
    }

    renderedCallback() {
        console.log("Child Rendered Callback");
    }

    disconnectedCallback() {
        console.log("Child Disconnected Callback");
    }

}