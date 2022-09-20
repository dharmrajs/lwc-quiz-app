import { LightningElement } from 'lwc';
import signInTempRef from './signInTemplate.html';
import signUpTempRef from './signUpTemplate.html';
import renderTempRef from './renderMethodCmp.html';
export default class RenderMethodCmp extends LightningElement {


    selectedBtn = "";

    render() {
        return this.selectedBtn === "Render SignUp Template" ? signUpTempRef :
                this.selectedBtn === "Render SignIn Template" ? signInTempRef : renderTempRef;
    }

    handleRenderChange(event) {
        this.selectedBtn = event?.target?.label;
    }
    
}