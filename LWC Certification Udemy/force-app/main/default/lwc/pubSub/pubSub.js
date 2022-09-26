import { LightningElement } from 'lwc';

export default class PubSub extends LightningElement {


   static pubSubEvents = {};


    static subscribe(eventName, func) {
        return {
            takeSubscription : function() {
                debugger;
                if(PubSub.pubSubEvents.hasOwnProperty(eventName)) {
                    PubSub.pubSubEvents[eventName].push(func);
                } else {
                    PubSub.pubSubEvents[eventName] = [func];
                }
            },
            unsubscribe : function() {
                debugger;
                if(PubSub.pubSubEvents.hasOwnProperty(eventName)) {
                    PubSub.pubSubEvents[eventName] = PubSub.pubSubEvents[eventName].filter((subscriberFunc)=> subscriberFunc!==func);
                }
            }
        }
    }


    static publish(eventName, ...varArgs) {
        debugger;
        const funcsToExec = PubSub.pubSubEvents[eventName];
        if(Array.isArray(funcsToExec)) {
            funcsToExec.forEach((func) => {
                func.apply(null, varArgs);
            })
        }
    }

}