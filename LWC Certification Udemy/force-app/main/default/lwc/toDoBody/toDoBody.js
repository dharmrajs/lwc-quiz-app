import { api, LightningElement, track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TODOITEMMC from '@salesforce/messageChannel/ToDoItemChannel__c';
export default class ToDoBody extends LightningElement {

    @track
    toDoTask = "";

    subscription = null;
    @wire(MessageContext)
    messageContext;

    
    publishMC() {
        debugger;
        const message = {
            todoItem : this.toDoTask,
        };
        publish(this.messageContext, TODOITEMMC, message);
        this.clearToDoTasks();
    }

    constructor() {
        super();
        this.toDoTask = "";
    }

    handleNewTODO(evt) {
        debugger;
        this.publishMC();
    }

    handleTODOItemBlur(evt) {
        this.toDoTask = evt?.target?.value;
    }


    clearToDoTasks() {
        debugger;
        this.toDoTask = "";
    }
}