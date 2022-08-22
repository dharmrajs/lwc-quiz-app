import { api, LightningElement, track, wire } from 'lwc';
import getSimilarCases from '@salesforce/apex/SimilarCasesController.getSimilarCases';

const columnLabels = [
   {label : 'Case Number', fieldName : 'CaseNumber'},
   {label : 'Subject', fieldName : 'Subject'},
]

export default class ShowSimilarCaseCmp extends LightningElement {


   @api
   recordId;
   @track
   similarCaseRecs;

   errorMsg

   columns = columnLabels;

   
   @wire(getSimilarCases, {caseId : '$recordId'})
   casesWithSimilarSubjects({error, data}) {
      debugger;
      if(data) {
         this.similarCaseRecs = data;         
         this.errorMsg = undefined;
      } else if(error) {
         this.errorMsg = error;
         this.similarCaseRecs = undefined;
      }
   }

}