public with sharing class GetBusinessController {
    
    public GetBusinessController() {

    }

    @AuraEnabled
    public static List<Account> getBusinesess() {
        return [select id, Name from Account];
    }
    
    @AuraEnabled
    public static List<Contact> getBusinesessContacts(String accId) {
        return [select id, Name, Account.Name from Contact where AccountId = :accId];
    }

    public static void dmlOnEmptyList() {
        List<Account> accList = new List<Account>();
        System.debug('At Start of Execution : ' + Limits.getCpuTime()); //1
        //Loop 1
        for(integer i = 0; i < 100000; i++) {
            //Though this should not be done
            insert accList;
        }
        System.debug('After Loop 1 without condition : ' + Limits.getCpuTime()); //1558
        //Loop 2
        for(integer i = 0; i < 100000; i++) {
            if(!accList.isEmpty()) {
                insert accList;
            }
        }
        System.debug('After Loop 2 with condition : '+ Limits.getCpuTime()); //1774
    }
}
