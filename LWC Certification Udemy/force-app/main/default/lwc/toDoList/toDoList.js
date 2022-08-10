import { LightningElement, track, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import TODOITEMMC from '@salesforce/messageChannel/TODOItemChannel__c';

export default class ToDoList extends LightningElement {

    @track
    todoItemsArr = [];

    @wire(MessageContext)
    messageContext;

    subscription = null;

    constructor() {
        super();
        this.todoItemsArr = [];
    }

    connectedCallback() {
        this.subscribeMC();
    }

    subscribeMC() {
        if(this.subscription) {
            return;
        } else {
            this.subscription = subscribe(this.messageContext, TODOITEMMC, (message) => {
                debugger;
                console.log("🚀 ~ file: toDoList.js ~ line 29 ~ ToDoList ~ this.subscription=subscribe ~ message", message);
                this.todoItemsArr.push(message.todoItem);
            });
        }        
    }



    handleToDoItemAdded(evt) {
        debugger;
        let todoTask = evt?.detail?.toDoTask;
        if(todoTask) {
            this.todoItemsArr.push(todoTask);
        }
    }
}