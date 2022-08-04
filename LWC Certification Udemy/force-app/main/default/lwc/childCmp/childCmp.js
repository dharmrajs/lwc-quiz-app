import { api, LightningElement, track } from 'lwc';

export default class ChildCmp extends LightningElement {

    @api
    childName = "";
    @api
    childId = "";
    @api
    childStatus = "";
    btnVariant = "";
    btnLabel = "";

    constructor() {
        super();
        console.log("Child Constructor");
        this.childName = "";
        this.childId = "";
        this.childStatus = "";
        this.btnVariant = "success";
        this.btnLabel = "Select";
    }

    connectedCallback() {
        console.log("Child ConnectedCallback");
    }

    handleSelectBtn(evt) {
        debugger;
        console.log("Select Btn Clicked ->", evt);
        console.log("childId->" + this.childId);
        console.log("🚀 ~ file: childCmp.js ~ line 29 ~ ChildCmp ~ handleSelectBtn ~ childName", this.childName);
        console.log("🚀 ~ file: childCmp.js ~ line 31 ~ ChildCmp ~ handleSelectBtn ~ childStatus", this.childStatus);
        if(this.btnVariant === "success") {
            let btnSelectEvt = new CustomEvent("selectbtnclick", {
                detail : {
                    childId : this.childId,
                    childName : this.childName,
                    childStatus : this.childStatus,
                },
                bubbles : true,
                composed : true
            });
            this.dispatchEvent(btnSelectEvt);
            this.btnLabel = "Deselect";
            this.btnVariant = "destructive";    
        } else {
            let btnSelectEvt = new CustomEvent("deselectevt", {
                detail : {
                    childId : this.childId,
                    childName : this.childName,
                    childStatus : this.childStatus,
                },
                bubbles : true,
                composed : true
            });
            this.dispatchEvent(btnSelectEvt);
            this.btnLabel = "Select";
            this.btnVariant = "success";             
        }
    }

    @api
    resetBtnToDefault() {
        console.log(this.childName, " Childs resetBtnToDefault called");
        this.btnLabel = "Select";
        this.btnVariant = "success";
    }
}