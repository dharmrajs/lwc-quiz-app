import { api, LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track
    address = {
        state : "Maharashtra",
        district : "Pune",
        city : "Bhosari"
    };

    @api
    nickName = ["Dharmraj", "Babu", "Golu", "Nayan"];

    onCityKeyUp(event) {
        debugger;
        console.log("🚀 ~ file: helloWorld.js ~ line 12 ~ HelloWorld ~ onCityKeyUp ~ event", event);
        //address.city = event.target.value;
        // this.address = {
        //     ...this.address,
        //     "city" : event.target.value
        // };
        this.address.city = event.target.value;
        this.nickName[0] = event.target.value;
    }

    /*Getter Demo*/
    users = ["Dharm", "Babu", "Nayan"];
    get firstUser() {
        return this.users[0].toUpperCase();
    }
}