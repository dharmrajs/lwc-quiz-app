import { api, LightningElement, track } from 'lwc';
import quizzAppQNAJson from '@salesforce/resourceUrl/quizzAppQNAJson'
export default class QuizApp extends LightningElement {


    @track
    quizJSONObj;

    finalScore;
    maxScore;


    connectedCallback() {
        debugger;
        console.log("quizJSONObj->", this.quizJSONObj);
        let jsonReq = new XMLHttpRequest();
        jsonReq.open("GET", quizzAppQNAJson, false);
        jsonReq.send();
        this.quizJSONObj = JSON.parse(jsonReq.responseText).qnaDetail;
        this.maxScore = this.quizJSONObj.length;
        this.finalScore = 0;
        console.log("🚀 ~ file: quizApp.js ~ line 17 ~ QuizApp ~ connectedCallback ~ quizJSONObj", this.quizJSONObj);
        console.log("🚀 ~ file: quizApp.js ~ line 17 ~ QuizApp ~ connectedCallback ~ quizJSONObj", this.quizJSONObj.qnaDetail);
        console.log("🚀 ~ file: quizApp.js ~ line 17 ~ QuizApp ~ connectedCallback ~ quizJSONObj", typeof this.quizJSONObj);
        /*let self = this;  
        this.fetchQnA(this.quizJSONStaticRes, self);*/
    }

    handleSubmitTest(evt) {
        debugger;
        let score = 0;
        for(let i = 0; i < this.maxScore; i++) {
            score+=this.template.querySelectorAll("c-question-cmp")[i].getCmpLevelScore();
        }
        this.finalScore = score;
    }
}