public with sharing class SimilarCasesController {
    public SimilarCasesController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getSimilarCases(String caseId){
        try {
            if(!String.isBlank(caseId)) {
                List<String> caseSubList = [select id, Subject from Case where id=:'5005i00000DB8y6AAD']?.Subject?.split(' ');
                System.debug('caseSub ->'+ caseSubList);
                String caseSub = String.join(caseSubList, '\' OR \'');
                System.debug('caseSub ->'+ caseSub);
                if(!String.isBlank(caseSub)) {
                    List<List<sObject>> caseWithSimilarSub = [FIND :caseSub IN ALL FIELDS Returning Case(Id, CaseNumber, Subject ORDER BY createdDate DESC limit 20)];
                    System.debug('caseWithSimilarSub->'+ caseWithSimilarSub);
                    if(caseWithSimilarSub.size() > 0) {
                        return caseWithSimilarSub[0];
                    } else {
                        throw new AuraHandledException('No Case found With Similar Subject');
                    }
                }
            }
            else {
                throw new AuraHandledException('Invalid case Id');
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return new List<Case>();
    }


    public static void stripInaccessiblePowers() {
        List<Account> newAccounts = new List<Account>();
        Account a = new Account(Name='Acme Corporation');
        Account b = new Account(Name='Blaze Comics', Rating='Warm');
        newAccounts.add(a);
        newAccounts.add(b);

        SObjectAccessDecision securityDecision = Security.stripInaccessible(
        AccessType.CREATABLE,
        newAccounts);

        //Without using stipInaccessible
        //I do not have create permisson over Rating field this will throw exception
        insert newAccounts;



        // No exceptions are thrown and no rating is set
        insert securityDecision.getRecords();

        System.debug(securityDecision.getRemovedFields().get('Account')); // Prints "Rating"
        System.debug(securityDecision.getModifiedIndexes()); // Prints "1"
    }




}
