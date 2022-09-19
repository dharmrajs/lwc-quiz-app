import { LightningElement } from 'lwc';

export default class AccessingElemInCmp extends LightningElement {


    fetchDetails(evt) {
        debugger;
        const firstPTag = this.template.querySelector("p");
        console.log(firstPTag.innerText);
        firstPTag.style.border = "1px solid red";
        this.template.querySelector(".manualDOMManipulation").innerHTML = `<p>
        Using lwc:dom="manual" saying to LWC that here it was manual dom manipulation and before this 
        here was empty and should be</p>`;
    }


}