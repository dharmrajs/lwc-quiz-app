import { api, LightningElement, track } from 'lwc';

export default class QuestionCmp extends LightningElement {

    @api
    qIdx;

    @api
    qna;


    @track
    selectedOpt


    get question() {
        return this.qna.qna.question;
    }

    @api
    getCmpLevelScore() {
        debugger;
        return (this.selectedOpt === this.qna?.qna?.correctAns?.text) ? 1 : 0;
    }

    get questionNumber() {
        return this.qIdx + 1;
    }

    get options() {
        let optionsObj = this.qna.qna.options;
        let returnList = [];
        for(const property in optionsObj) {
            returnList.push({
                label : optionsObj[property],
                value : optionsObj[property],                
            });
        }
        return returnList;
    }
    
    handleChange(evt) {
        debugger;
        this.selectedOpt = evt.detail.value;        
        console.log("🚀 ~ file: questionCmp.js ~ line 34 ~ QuestionCmp ~ handleChange ~ selectedOpt", this.selectedOpt);
    }


    
}