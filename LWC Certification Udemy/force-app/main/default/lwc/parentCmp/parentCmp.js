import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    

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

}