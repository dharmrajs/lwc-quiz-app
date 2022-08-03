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

}
