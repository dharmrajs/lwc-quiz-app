import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {

    watchArray = ["Firebolt", "Amazfit", "Titan", "Samsung"];
    ceoList = [ 
        {
            id : 1,
            company : "Google",
            name : "Sundar Pichai",
        },
        {
            id : 2,
            company : "FB",
            name : "Mark Zukerberg",
        },
        {
            id : 3,
            company : "Apple Inc",
            name : "Tim Cook",
        },
        {
            id : 4,
            company : "Amazon",
            name : "Jeff Bezoz",
        },
    ]
}