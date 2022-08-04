import { api, LightningElement, track } from 'lwc';

export default class ParentCmp extends LightningElement {
    

    @track
    childNames = [
        {
            id : "child1",
            label : "Child One",
            status : "Deselected",
        },
        {
            id : "child2",
            label : "Child Two",
            status : "Deselected",
        },
        {
            id : "child3",
            label : "Child Three",
            status : "Deselected",
        },
    ];

    constructor() {
        super();
        console.log("Parent Component Constructor");
    }

    connectedCallback() {
        console.log("Parent ConnectedCallback");
    }

    handleSelectBtnEvent(evt) {
        debugger;
        console.log("Parent handleSelectCalled");
        let evtDetails = evt?.detail;
        let childId = evtDetails?.childId;
        let isLegitChildClicked = false;
        for(let i = 0; i < this.childNames.length; i++) {
            if(this.childNames[i].id === childId) {
                this.childNames[i].status = "Selected";
                isLegitChildClicked = true;
                break;
            }
        }
        if(isLegitChildClicked) {
            console.log("Clicked Legit Button");
        } else {
            evt.stopImmediatePropagation();
        }
    }

    @api
    resetStatus() {
        debugger;
        this.childNames.forEach((currChildObj) => {
            currChildObj.status = "Deselected";
        });
        this.template.querySelectorAll("c-child-cmp").forEach(currChildCmp => {
            currChildCmp.resetBtnToDefault();
        })
    }

    handleDeselectBtnEvt(evt) {
        let evtDet = evt?.detail;
        let childId = evtDet?.childId;
        let decCounter = false;
        for(let i = 0; i < this.childNames.length; i++) {
            if(this.childNames[i].id === childId) {
                this.childNames[i].status = "Deselected";
                decCounter = true;
                break;
            }
        }
    }
}